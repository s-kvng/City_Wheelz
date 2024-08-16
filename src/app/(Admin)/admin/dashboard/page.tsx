"use client";

import DashboardCard from "@/components/cards/DashboardCard";
import DividerUi from "@/components/ui/DividerUi";
import { Divider, Grid, Text } from "@mantine/core";
import React from "react";

const list = [
  {
    title: "Cars In Stock",
    value: 40,
    icon: "LineChartIcon",
    color: "primary",
  },
  {
    title: "Drivers",
    value: 10,
    icon: "LineChartIcon",
    color: "primary",
  },
  {
    title: "Total Bookings",
    value: 20,
    icon: "LineChartIcon",
    color: "primary",
  },
];

const Dashboard = () => {
  return (
    <>
      <Text mb={"1rem"} size="lg" fw={500}>
        Welcome Admin
      </Text>

      <DividerUi label="Display Data" />

      <Grid justify="space-around" px={"md"}>
        {list.map((item) => (
          <Grid.Col key={item.title} span={6}>
            <DashboardCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
