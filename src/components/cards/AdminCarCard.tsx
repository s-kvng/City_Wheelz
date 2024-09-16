"use client";

import supabase from "@/config/superBaseClient";
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
  LoadingOverlay,
  Paper,
  Stack,
  TextInput,
  NativeSelect,
  Radio,
  Group,
  CheckIcon,
} from "@mantine/core";
import {
  IconEdit,
  IconManualGearbox,
  IconTrash,
  IconUsers,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const AdminCarCard = ({ car, deleteFn }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updateInStock, setUpdateInStock] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(car.in_stock ? "inStock" : "rented");

  const handleUpdate = async () => {
    setIsSubmitting(true);
    const updatedCar = { in_stock: value === "inStock" ? true : false };

    try {
      const { data, error } = await supabase
        .from("cars")
        .update(updatedCar)
        .eq("id", car.id)
        .select();

      if (data) {
        console.log("Updated");
      }
    } catch (error) {
      console.log("ERROR: " + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card miw={{ base: "100%", lg: "30%" }}>
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
            miw={{ base: 200, md: 150 }}
            height="120px"
            radius="md"
            my={8}
            src={car.imageSrc}
            alt="Toyota Camry"
          />

          <Box>
            <Box style={{ textAlign: "center" }} my="md">
              {car.in_stock ? <Text>In stock</Text> : <Text>Rented</Text>}
              {/* Status renderer */}
            </Box>

            <Box
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button onClick={open} variant="" mb="xs">
                <IconEdit />
              </Button>

              <Button
                onClick={() => deleteFn(car.id)}
                variant="outline"
                color="red"
                mb="xs"
              >
                <IconTrash />
              </Button>
            </Box>
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

      <Modal opened={opened} onClose={close} title="Update Car">
        <LoadingOverlay
          visible={isSubmitting}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Box px={"md"} py={"xl"}>
          <Paper className={""}>
            <Stack>
              <Radio.Group
                value={value}
                onChange={setValue}
                name="favoriteFramework"
                label="Select the car state"
                description="In stock or rented"
                withAsterisk
              >
                <Group mt="xs">
                  <Radio value="inStock" label="In Stock" />
                  <Radio value="rented" label="Rented" />
                </Group>
              </Radio.Group>

              <Button onClick={handleUpdate} variant="" mb="xs">
                Update
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default AdminCarCard;
