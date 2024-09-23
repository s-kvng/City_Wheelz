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
} from "@mantine/core";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import classes from "./Style.module.css";
import SelectDate from "../ui/SelectDate";
import supabase from "@/config/superBaseClient";
import { useCreateBookingForm } from "@/hooks/useCreateBookingForm";
import { IconPhotoScan } from "@tabler/icons-react";
import { toast } from "react-toastify";

const Booking = (props: PaperProps) => {
  const icon = <IconPhotoScan style={{ width: 24, height: 24 }} stroke={1.5} />;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [imageValue, setImageValue] = useState<File | null>(null);

  const bookingForm = useCreateBookingForm();

  const uploadImage = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("city-wheelz-media")
        .upload(`booking/${uuidV4()}`, imageValue);

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
      car,
      price,
    } = bookingForm.values;

    console.log("submitting");

    const imageData = await uploadImage();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("booking")
        .insert([
          {
            firstName: firstname,
            lastName: lastname,
            address: address,
            license_no: licenseNumber,
            contact: phone,
            email: email,
            ghCard: ghanaCard,
            car: car,
            pickup_date: pickupDate,
            return_date: returnDate,
            price: price,
            imageUrl: `https://amtqrcpekkymvtwzuhph.supabase.co/storage/v1/object/public/${imageData.fullPath}`,
          },
        ])
        .select();

      if (data) {
        setIsSubmitted(true);
        console.log(data);
        toast.success("New Booking uploaded Successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload new booking", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(false);
      bookingForm.reset();
      setPickupDate(null);
      setReturnDate(null);
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
            Create Booking
          </Text>

          <form
            className="mt-4"
            onSubmit={bookingForm.onSubmit(() => handleSignup())}
          >
            <Stack>
              <TextInput
                required
                label="First Name"
                placeholder="John Doe"
                radius={"md"}
                value={bookingForm.values.firstname}
                onChange={(event) =>
                  bookingForm.setFieldValue(
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
                value={bookingForm.values.lastname}
                onChange={(event) =>
                  bookingForm.setFieldValue(
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
                value={bookingForm.values.address}
                onChange={(event) =>
                  bookingForm.setFieldValue(
                    "address",
                    event.currentTarget.value
                  )
                }
              />

              <TextInput
                required
                label="License Number"
                placeholder="******"
                radius={"md"}
                value={bookingForm.values.licenseNumber}
                onChange={(event) =>
                  bookingForm.setFieldValue(
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
                value={bookingForm.values.phone}
                onChange={(event) =>
                  bookingForm.setFieldValue("phone", event.currentTarget.value)
                }
              />

              <TextInput
                required
                label="Email"
                placeholder="cargo@gmail.com"
                radius={"md"}
                value={bookingForm.values.email}
                onChange={(event) =>
                  bookingForm.setFieldValue("email", event.currentTarget.value)
                }
                error={bookingForm.errors.email && bookingForm.errors.email}
              />

              <TextInput
                required
                label="Ghana Card No."
                placeholder="GHA-**********"
                radius={"md"}
                value={bookingForm.values.ghanaCard}
                onChange={(event) =>
                  bookingForm.setFieldValue(
                    "ghanaCard",
                    event.currentTarget.value
                  )
                }
                error={
                  bookingForm.errors.ghanaCard && bookingForm.errors.ghanaCard
                }
              />

              <TextInput
                required
                label="Car (name-color)"
                placeholder="eg:ford-red"
                radius={"md"}
                value={bookingForm.values.car}
                onChange={(event) =>
                  bookingForm.setFieldValue("car", event.currentTarget.value)
                }
              />

              <div>
                <SelectDate
                  label="Pickup Date"
                  value={pickupDate}
                  onChange={setPickupDate}
                  minDate={new Date()}
                />
              </div>

              <div>
                <SelectDate
                  label="Return Date"
                  value={returnDate}
                  onChange={setReturnDate}
                  minDate={new Date()}
                />
              </div>

              <TextInput
                required
                label="Price"
                placeholder="₵300"
                radius={"md"}
                value={bookingForm.values.price}
                onChange={(event) =>
                  bookingForm.setFieldValue("price", event.currentTarget.value)
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

export default Booking;
