import {
  Card,
  Group,
  Text,
  Avatar,
  Stack,
  Anchor,
  Button,
  Rating,
} from "@mantine/core";
import {
  IconDownload,
  IconEdit,
  IconTrash,
  IconUserPlus,
} from "@tabler/icons-react";
import React from "react";

const AdminReviewCard = ({ review, deleteFn }) => {
  console.log(review);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group>
        <Stack gap={5}>
          <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
            {review.name}
          </Text>
        </Stack>
      </Group>

      <Group mt="md" gap="xl">
        <div>
          <p className="font-semibold mb-4">{review.content}</p>

          <div>
            <Rating value={review.rating} fractions={2} readOnly />
          </div>
        </div>

        <Button
          onClick={() => deleteFn(review.id)}
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

export default AdminReviewCard;
