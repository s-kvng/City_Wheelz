"use client";

import DashboardCard from "@/components/cards/DashboardCard";
import DividerUi from "@/components/ui/DividerUi";
import { Divider, Grid, Text } from "@mantine/core";
import { useUserSessionContext } from "@/context/UserSessionContext";

const list = [
  {
    title: "Cars In Stock",
    value: 4,
    icon: "LineChartIcon",
    color: "primary",
  },
  {
    title: "Drivers",
    value: 3,
    icon: "LineChartIcon",
    color: "primary",
  },
  {
    title: "Total Bookings",
    value: 2,
    icon: "LineChartIcon",
    color: "primary",
  },
];

const Dashboard = () => {
  const { session, user, loading } = useUserSessionContext();
  console.log(session);
  console.log(user);
  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text mb={"0.1rem"} size="lg" fw={500}>
            {session ? " Welcome Admin" : "Not Admin"}
          </Text>
          <Text mb={"0.3rem"} size="sm" fw={200}>
            @{user?.email}
          </Text>
        </>
      )}

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
