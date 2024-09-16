"use client";

import AdminBookingCard from "@/components/cards/AdminBookingCard";
import AdminReviewCard from "@/components/cards/AdminReviewCard";
import supabase from "@/config/superBaseClient";
import { Grid, Notification } from "@mantine/core";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [errors, setErrors] = useState(null);
  const [onSuccess, setOnSuccess] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      let { data, error } = await supabase.from("Reviews").select("*");

      if (error) {
        console.error(error);
        setErrors("Could not fetch cars");
        setReviews(null);
        return; // Abort the function if the request fails.
      }

      if (data) {
        setReviews(data);
        setErrors(null);
        console.log(data);
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (reviewId) => {
    // Delete driver logic here
    // Update the state to remove the deleted driver
    try {
      // Call the API to delete the car from the database
      const { error } = await supabase
        .from("Reviews")
        .delete()
        .eq("id", reviewId);

      // Display a success message or error message based on the API response
      if (!error) {
        setOnSuccess(true);
        const updatedReviews = reviews?.filter((b) => b.id !== reviewId);
        setReviews(updatedReviews);
        console.log("Review deleted successfully");
      }

      if (error) {
        console.error(error);
        setErrors("Could not delete booking");
      }
    } catch (error) {
      console.error(error);
      setErrors("Failed to delete booking");
    } finally {
      setErrors(null);
    }
  };

  const onCloseNotification = () => {
    setOnSuccess(false);
    setErrors(null);
  };
  return (
    <>
      {onSuccess && (
        <Notification onClose={onCloseNotification} withBorder title="Success">
          Review Sucessfully deleted
        </Notification>
      )}
      <Grid justify="space-around" px={"md"}>
        {reviews &&
          reviews.map((review) => (
            <Grid.Col key={review.id} span={6}>
              <AdminReviewCard review={review} deleteFn={handleDelete} />
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
};

export default Reviews;
