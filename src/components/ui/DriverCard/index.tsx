import { Card, Group , Text , Avatar , Stack, Anchor, Button} from '@mantine/core'
import { IconDownload, IconUserPlus } from '@tabler/icons-react'
import React from 'react'

const DriverCard = () => {
  return (
    <Card  shadow="sm" padding="lg" radius="md" withBorder>
        <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://twitter.com/mantinedev"
                c="dimmed"
                size="xs"
                style={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
        </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Reviews
            </Text>
            <Button rightSection={<IconUserPlus size={14} />}>Request</Button>
          </Group>
    </Card>
  )
}

export default DriverCard