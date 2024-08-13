import { IDriverFormDetails } from "@/models";
import { useForm, UseFormReturnType } from "@mantine/form";

export const useCreateReviewForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      content: "",
    },
    validate: {
      content: (val: string) =>
        val.length < 15 ? "Content must be at least 15 characters" : null,
    },
  });

  return form;
};
