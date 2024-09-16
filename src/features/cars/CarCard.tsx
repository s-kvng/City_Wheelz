import { ghCurrency } from "@/contants";
import {
  Card,
  Flex,
  Box,
  Title,
  Text,
  Image,
  Button,
  Divider,
  Modal,
} from "@mantine/core";
import { IconManualGearbox, IconUsers } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const CarCard = ({ car }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card miw={{ base: "100%", lg: "40%" }}>
        <Flex align="flex-end" justify="space-between">
          <Box>
            <Title order={5}>
              {car.model} {car.year}
            </Title>
            <Text c="gray.6">{car.make}</Text>
          </Box>
        </Flex>
        <Flex align="flex-end" justify="space-between">
          <Image
            miw={{ base: 200, md: 250 }}
            height="150px"
            radius="md"
            my={8}
            src={car.imageSrc}
            alt={car.model}
          />

          <Box>
            <Box style={{ textAlign: "center" }} my="md">
              {/* Status renderer */}
              {car.in_stock ? <Text>In stock</Text> : <Text>Rented</Text>}
            </Box>

            <Button onClick={open} variant="gradient" mb="xs">
              Rent Now
            </Button>
          </Box>
        </Flex>

        <Divider />

        <Flex align="center" justify="space-between">
          <Flex align="center" gap={{ base: 4, md: 16 }}>
            <Flex my={8} align="center" title="seating capacity">
              <IconUsers size="16px" color="gray" />
              <Text c="gray.6" size="sm" mx={4}>
                {car.seats}
              </Text>
            </Flex>

            <Flex my={8} align="center" title="transmission">
              <IconManualGearbox size="16px" color="gray" />
              <Text c="gray.6" size="sm" mx={4}>
                {car.transmission}
              </Text>
            </Flex>
            <Flex>
              {/* <BsFuelPump size="16px" color="gray"/> */}
              <Text c="gray.6" size="sm" mx={4}>
                {car.fuel_type}
              </Text>
            </Flex>
          </Flex>

          <Flex align="flex-end">
            <Text fw="bold" size="lg">
              {ghCurrency}
              {car.price}
            </Text>
            <Text size="xs">/day</Text>
          </Flex>
        </Flex>
      </Card>

      <Modal opened={opened} onClose={close} title="Contact Us">
        <Text>No: +233 53 435 3425</Text>
        <Text>Email: ride@citywheelz.com</Text>
        <Text>Address: 123 Main St, City, Country</Text>
      </Modal>
    </>
  );
};

export default CarCard;
