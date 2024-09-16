"use client";

import ReviewCard from "@/components/cards/ReviewCard";
import Review from "@/components/forms/Review";
import supabase from "@/config/superBaseClient";
import {
  Card,
  Group,
  Text,
  Avatar,
  Stack,
  Anchor,
  Button,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload, IconUserPlus, IconScript } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const DriverCard = ({ driver }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isOpened, { open: viewReview, close: closeReview }] =
    useDisclosure(false);
  const [errors, setErrors] = useState(null);
  const [reviews, setReviews] = useState(null);
  console.log(driver);

  useEffect(() => {
    const fetchReviews = async () => {
      //fetch reviews for the driver
      try {
        let { data, error } = await supabase
          .from("Reviews")
          .select("*")
          .eq("driver", driver.id);

        if (error) {
          console.error(error);
          setErrors("Could not fetch cars");
          setReviews(null);
          return; // Abort the function if the request fails.
        }

        if (data) {
          setReviews(data);
          console.log(data);
        }
      } catch (error) {}
    };

    fetchReviews();
  }, []);
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group>
          <Avatar src={driver.imageSrc1} radius="xl" />
          <Stack gap={5}>
            <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              {driver.firstName} {driver.lastName}
            </Text>
            <Anchor
              href="https://twitter.com/mantinedev"
              c="dimmed"
              size="xs"
              style={{ lineHeight: 1 }}
            >
              {driver.email}
            </Anchor>
          </Stack>
        </Group>

        <Text size="sm" mt="md">
          Our Dependable Driver
        </Text>

        <Group mt="md" gap="lg">
          <Text size="sm">
            <b> {reviews ? reviews.length : 0} </b> Reviews
          </Text>
          <Button onClick={open} rightSection={<IconUserPlus size={14} />}>
            Add Review
          </Button>

          <Button onClick={viewReview} rightSection={<IconScript size={14} />}>
            View Reviews
          </Button>
        </Group>
      </Card>

      <Modal opened={opened} onClose={close} title="Add Review">
        <Review driverId={driver.id} />
      </Modal>

      {/* modal for viewing reviews */}
      <Modal opened={isOpened} onClose={closeReview} title="View Review">
        {reviews && reviews.map((review) => <ReviewCard review={review} />)}
      </Modal>
    </>
  );
};

export default DriverCard;
