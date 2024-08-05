import { Card, Group , Text , Avatar , Stack, Anchor, Button} from '@mantine/core'
import { IconDownload, IconEdit, IconTrash, IconUserPlus } from '@tabler/icons-react'
import React from 'react'

const AdminDriverCard = ({driver}) => {
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
            <span>Address :</span> { driver.address}
          </Text>
          <Text size="sm" mt="sm">
            <span>License No.</span> { driver.license_number}
          </Text>
          <Text size="sm" mt="sm">
            <span>Contact : </span> { driver.contact}
          </Text>
          <Text size="sm" mt="md">
            <span>Ghana Card : </span> { driver.ghCard}
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Reviews
            </Text>

            <Button variant='' mb="xs">
                <IconEdit/>
              </Button>
              
              <Button variant='outline' color='red' mb="xs">
                <IconTrash/>
              </Button>
          </Group>
    </Card>
  )
}

export default AdminDriverCard