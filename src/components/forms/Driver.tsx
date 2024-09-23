"use client";

import {
  PaperProps,
  Box,
  Button,
  Group,
  LoadingOverlay,
  Paper,
  Stack,
  TextInput,
  Text,
  FileInput,
  rem,
} from "@mantine/core";
import { useState } from "react";

import { useCreateDriverForm } from "@/hooks/useCreateDriverForm";
import classes from "./Style.module.css";
import { IconPhotoScan } from "@tabler/icons-react";
import supabase from "@/config/superBaseClient";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";

const Driver = (props: PaperProps) => {
  const icon = (
    <IconPhotoScan style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [imageValue, setImageValue] = useState<File | null>(null);

  const driverForm = useCreateDriverForm();

  const uploadImage = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("city-wheelz-media")
        .upload(`driver/${uuidV4()}`, imageValue);

      if (data) {
        console.log(data);
        return data;
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    const {
      firstname,
      lastname,
      phone,
      address,
      licenseNumber,
      drivingLicenseExpiry,
      email,
      ghanaCard,
    } = driverForm.values;

    console.log("submitting");

    const imageData = await uploadImage();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("drivers")
        .insert([
          {
            firstName: firstname,
            lastName: lastname,
            address: address,
            license_number: licenseNumber,
            contact: phone,
            email: email,
            ghCard: ghanaCard,
            imageSrc1: `https://amtqrcpekkymvtwzuhph.supabase.co/storage/v1/object/public/${imageData.fullPath}`,
          },
        ])
        .select();

      if (data) {
        setIsSubmitted(true);
        toast.success("New Driver uploaded Successfully", {
          position: "top-center",
        });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload new booking", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(false);
      driverForm.reset();
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={isSubmitting}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <Box px={"md"} py={"xl"}>
        <Paper className={classes.formPaper} withBorder {...props}>
          <Text size="lg" fw={500}>
            Create Driver
          </Text>

          <form
            className="mt-4"
            onSubmit={driverForm.onSubmit(() => handleSignup())}
          >
            <Stack>
              <TextInput
                required
                label="First Name"
                placeholder="John Doe"
                radius={"md"}
                value={driverForm.values.firstname}
                onChange={(event) =>
                  driverForm.setFieldValue(
                    "firstname",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                required
                label="Last Name"
                placeholder="Doe"
                radius={"md"}
                value={driverForm.values.lastname}
                onChange={(event) =>
                  driverForm.setFieldValue(
                    "lastname",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                required
                label="Address"
                placeholder="EN-111-***"
                radius={"md"}
                value={driverForm.values.address}
                onChange={(event) =>
                  driverForm.setFieldValue("address", event.currentTarget.value)
                }
              />

              <TextInput
                required
                label="License Number"
                placeholder="******"
                radius={"md"}
                value={driverForm.values.licenseNumber}
                onChange={(event) =>
                  driverForm.setFieldValue(
                    "licenseNumber",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                required
                label="Phone Number"
                placeholder="+1 123 456 7890"
                radius={"md"}
                value={driverForm.values.phone}
                onChange={(event) =>
                  driverForm.setFieldValue("phone", event.currentTarget.value)
                }
              />

              <TextInput
                required
                label="Email"
                placeholder="cargo@gmail.com"
                radius={"md"}
                value={driverForm.values.email}
                onChange={(event) =>
                  driverForm.setFieldValue("email", event.currentTarget.value)
                }
                error={driverForm.errors.email && driverForm.errors.email}
              />

              <TextInput
                required
                label="Ghana Card No."
                placeholder="GHA-**********"
                radius={"md"}
                value={driverForm.values.ghanaCard}
                onChange={(event) =>
                  driverForm.setFieldValue(
                    "ghanaCard",
                    event.currentTarget.value
                  )
                }
                error={
                  driverForm.errors.ghanaCard && driverForm.errors.ghanaCard
                }
              />

              <FileInput
                required
                leftSection={icon}
                accept="image/png,image/jpeg"
                label="Upload Image"
                placeholder="Upload Image"
                leftSectionPointerEvents="none"
                value={imageValue}
                onChange={setImageValue}
              />
            </Stack>

            <Group justify="space-between" mt="xl">
              <Button type="submit" radius={"xl"}>
                Submit
              </Button>
            </Group>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Driver;
