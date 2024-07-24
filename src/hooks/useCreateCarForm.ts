import { ICar } from '@/models'
import { useForm, UseFormReturnType } from '@mantine/form'

export const useCreateCarForm = (): UseFormReturnType<ICar> =>{
    const form = useForm({
        initialValues:{
            make: "",
            model: "",
            year: "",
            description: "",
            color: "",
            transmission: "",
            seatingCapacity: "",
            fuelType: "",
            pricePerDay: "",
            image: "",
            isAvailable: true,
        },
    });

    return form
}