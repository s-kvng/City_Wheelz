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

import classes from "./Style.module.css";
import { useCreateCarForm } from "@/hooks/useCreateCarForm";
import supabase from "@/config/superBaseClient";
import { IconPhotoScan } from "@tabler/icons-react";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";

const Car = (props: PaperProps) => {
  const icon = (
    <IconPhotoScan style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [imageValue, setImageValue] = useState<File | null>(null);

  const carForm = useCreateCarForm();

  const uploadImage = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("city-wheelz-media")
        .upload(`admin/${uuidV4()}`, imageValue);

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
      make,
      model,
      year,
      description,
      color,
      transmission,
      seatingCapacity,
      fuelType,
      pricePerDay,
      isAvailable,
    } = carForm.values;

    const imageData = await uploadImage();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("cars")
        .insert([
          {
            make: make,
            model: model,
            year: year,
            description: description,
            color: color,
            transmission: transmission,
            seats: seatingCapacity,
            price: pricePerDay,
            fuel_type: fuelType,
            imageSrc: `https://amtqrcpekkymvtwzuhph.supabase.co/storage/v1/object/public/${imageData.fullPath}`,
          },
        ])
        .select();

      if (error) {
        console.log("Error-> ", error);
      }
      if (data) {
        setIsSubmitted(true);
        console.log(data);
        toast.success("New car uploaded Successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload new car", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(false);
      carForm.reset();
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
            Create Car
          </Text>

          <form
            className="mt-4"
            onSubmit={carForm.onSubmit(() => handleSignup())}
          >
            <Stack>
              <TextInput
                required
                label="Make"
                placeholder="Ford, Toyota"
                radius={"md"}
                value={carForm.values.make}
                onChange={(event) =>
                  carForm.setFieldValue("make", event.currentTarget.value)
                }
              />

              <TextInput
                required
                label="Model"
                placeholder="Sudan"
                radius={"md"}
                value={carForm.values.model}
                onChange={(event) =>
                  carForm.setFieldValue("model", event.currentTarget.value)
                }
              />

              <TextInput
                required
                label="Year"
                placeholder="20**"
                radius={"md"}
                value={carForm.values.year}
                onChange={(event) =>
                  carForm.setFieldValue("year", event.currentTarget.value)
                }
              />

              <TextInput
                label="Description"
                placeholder="Anything about the car"
                radius={"md"}
                value={carForm.values.description}
                onChange={(event) =>
                  carForm.setFieldValue(
                    "description",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                label="Color"
                placeholder="Red / Green / Blue"
                radius={"md"}
                value={carForm.values.color}
                onChange={(event) =>
                  carForm.setFieldValue("color", event.currentTarget.value)
                }
              />

              <TextInput
                required
                label="Transmission"
                placeholder="Automatic / Manual"
                radius={"md"}
                value={carForm.values.transmission}
                onChange={(event) =>
                  carForm.setFieldValue(
                    "transmission",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                required
                label="No. of Seats"
                placeholder="5"
                radius={"md"}
                value={carForm.values.seatingCapacity}
                onChange={(event) =>
                  carForm.setFieldValue(
                    "seatingCapacity",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                required
                label="Price Per Day"
                placeholder="₵300"
                radius={"md"}
                value={carForm.values.pricePerDay}
                onChange={(event) =>
                  carForm.setFieldValue(
                    "pricePerDay",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                required
                label="Fuel Type"
                placeholder="eg. Disel"
                radius={"md"}
                value={carForm.values.fuelType}
                onChange={(event) =>
                  carForm.setFieldValue("fuelType", event.currentTarget.value)
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
              <Button disabled={isSubmitting} type="submit" radius={"xl"}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Group>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Car;
