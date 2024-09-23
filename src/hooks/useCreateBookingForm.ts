import { IBooking } from '@/models'
import { useForm, UseFormReturnType } from '@mantine/form'

export const useCreateBookingForm = (): UseFormReturnType<IBooking> =>{
    const form = useForm({
        initialValues:{
            imageUrl: "",
            firstname: "",
            lastname: "",
            phone: "",
            address: "",
            licenseNumber: "",
            drivingLicenseExpiry: "",
            email: "",
            ghanaCard: "",
            car: "",
        },
        validate:{
            email: (value: string) => 
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                   ? null
                    : 'Invalid email format',
            ghanaCard: (val: string) =>
                val.length < 14 ? 'Ghana card must be at least 14 characters' : null,
        }
    })

    return form
}