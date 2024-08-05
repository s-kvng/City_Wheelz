import { Card, Group , Text , Avatar , Stack, Anchor, Button} from '@mantine/core'
import { IconDownload, IconUserPlus } from '@tabler/icons-react'
import React from 'react'

const DriverCard = ({ driver }) => {
  return (
    <Card  shadow="sm" padding="lg" radius="md" withBorder>
        <Group>
            <Avatar src={driver.imageSrc1} radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              {driver.firstName} { driver.lastName}
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

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Reviews
            </Text>
            <Button rightSection={<IconUserPlus size={14} />}>Add Review</Button>
          </Group>
    </Card>
  )
}

export default DriverCard