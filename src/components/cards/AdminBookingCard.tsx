import {
  Card,
  Group,
  Text,
  Avatar,
  Stack,
  Anchor,
  Button,
} from "@mantine/core";
import {
  IconDownload,
  IconEdit,
  IconTrash,
  IconUserPlus,
} from "@tabler/icons-react";
import React from "react";

const AdminDriverCard = ({ booking, deleteFn }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group>
        <Avatar src={booking.imageUrl} radius="xl" />
        <Stack gap={5}>
          <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
            {booking.firstName} {booking.lastName}
          </Text>
          <Anchor
            href="https://twitter.com/mantinedev"
            c="dimmed"
            size="xs"
            style={{ lineHeight: 1 }}
          >
            {booking.email}
          </Anchor>
        </Stack>
      </Group>

      <Text size="sm" mt="md">
        <span>Address :</span> {booking.address}
      </Text>
      <Text size="sm" mt="sm">
        <span>License No.</span> {booking.license_no}
      </Text>
      <Text size="sm" mt="sm">
        <span>Contact : </span> {booking.contact}
      </Text>
      <Text size="sm" mt="sm">
        <span>Ghana Card : </span> {booking.ghCard}
      </Text>
      <Text size="sm" mt="sm">
        <span>Car Type : </span> {booking.car}
      </Text>
      <Text size="sm" mt="sm">
        <span>Price : </span>GH₵ {booking.price}
      </Text>

      <Group mt="md" gap="xl">
        <div>
          <p className="font-semibold ">Dates</p>
          <Text size="sm">Pickup : {booking.pickup_date}</Text>
          <Text size="sm">Dropoff : {booking.return_date}</Text>
        </div>

        <Button
          onClick={() => deleteFn(booking.id)}
          variant="outline"
          color="red"
          mb="xs"
        >
          <IconTrash />
        </Button>
      </Group>
    </Card>
  );
};

export default AdminDriverCard;
