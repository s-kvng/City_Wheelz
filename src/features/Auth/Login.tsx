"use client";

import {
  Box,
  Paper,
  Stack,
  Text,
  TextInput,
  PaperProps,
  PasswordInput,
  Group,
  Anchor,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import DividerUi from "@/components/ui/DividerUi";
import classes from "./Style.module.css";
import useLoginForm from "@/hooks/useLoginForm";
import { loginWithEmailPassword } from "@/services/auth.service";
import NotRegisteredAlert from "./NotRegisteredAlert";
import NotVerifiedAlert from "./NotVerifiedAlert";

const errorMessage = "Invalid login credentials";

const Login = (props: PaperProps) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [notRegistered, setNotRegistered] = useState<boolean>(false);
  const [notVerified, setNotVerified] = useState<boolean>(false);
  const form = useLoginForm();
  const { push } = useRouter();

  const handleLogin = async () => {
    const { email, password } = form.values;

    setIsSubmitting(true);
    try {
      const { error, data } = await loginWithEmailPassword(email, password);
      console.log("user -> ", data.user);
      if (error && error.message === errorMessage) {
        console.log(error);
        toast.error("Failed to login, please check your credentials.", {
          position: "top-center",
        });
        setNotRegistered(true);
      } else if (data.user == null || data.session == null) {
        setNotVerified(true);
        toast.error(
          "Failed to verify your account, please verify your email.",
          {
            position: "top-center",
          }
        );
      } else {
        setNotRegistered(false);
        setNotVerified(false);
        form.reset();
        push("/admin/dashboard");
        toast.success("Login successful, redirecting to dashboard...", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to login, please check your credentials.", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={isSubmitting}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <Box>
        <Paper className={classes.formPaper} withBorder {...props}>
          <Text size="lg" fw={500}>
            Welcome back Admin
          </Text>
          <DividerUi label="Or Continue with Email" />

          <form className="mt-4" onSubmit={form.onSubmit(() => handleLogin())}>
            <Stack>
              <TextInput
                required
                label="Email"
                placeholder="cargo@gmail.com"
                radius={"md"}
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && form.errors.email}
              />
              <PasswordInput
                required
                label="Password"
                placeholder="*********"
                radius={"md"}
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={form.errors.password && form.errors.password}
              />
            </Stack>

            {/* Error alerts  */}
            {notRegistered && <NotRegisteredAlert />}
            {notVerified && <NotVerifiedAlert />}

            <Group justify="space-between" mt="xl">
              {/* <Anchor
                  component={Link}
                  href={"signup"}
                  type='button'
                  c={"dimmed"}
                  size='xs'
                >
                  Don{`'`}t have an account ? Register
                </Anchor> */}
              <Button type="submit" radius={"xl"}>
                Login
              </Button>
            </Group>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
