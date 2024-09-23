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
  Textarea,
  Rating,
} from "@mantine/core";
import { useState } from "react";

import { useCreateReviewForm } from "@/hooks/useCreateReviewForm";
import classes from "./Style.module.css";
import { IconPhotoScan } from "@tabler/icons-react";
import supabase from "@/config/superBaseClient";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";

interface ReviewProps extends PaperProps {
  driverId: string;
}

const Review = (props: ReviewProps) => {
  const icon = (
    <IconPhotoScan style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [value, setValue] = useState(1);

  const reviewForm = useCreateReviewForm();

  const handleSignup = async () => {
    const { name, content } = reviewForm.values;

    console.log("submitting");

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("Reviews")
        .insert([
          {
            name: name,
            content: content,
            driver: props.driverId,
            rating: value,
          },
        ])
        .select();

      if (data) {
        setIsSubmitted(true);
        toast.success("New Review uploaded Successfully", {
          position: "top-center",
        });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(false);
      reviewForm.reset();
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
            Add Review
          </Text>

          <form
            className="mt-4"
            onSubmit={reviewForm.onSubmit(() => handleSignup())}
          >
            <Stack>
              <TextInput
                required
                label="Name"
                placeholder="John Doe"
                radius={"md"}
                value={reviewForm.values.name}
                onChange={(event) =>
                  reviewForm.setFieldValue("name", event.currentTarget.value)
                }
              />

              <Textarea
                required
                label="Content"
                description="Only add a review if you have had an encounter with the driver"
                placeholder="Review must be true"
                minRows={2}
                maxRows={4}
                value={reviewForm.values.content}
                onChange={(event) =>
                  reviewForm.setFieldValue("content", event.currentTarget.value)
                }
              />

              <Rating value={value} onChange={setValue} />
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

export default Review;
