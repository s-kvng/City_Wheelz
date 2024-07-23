import { IDriverFormDetails } from '@/models'
import { useForm, UseFormReturnType } from '@mantine/form'

export const useCreateDriverForm = (): UseFormReturnType<IDriverFormDetails> =>{
    const form = useForm({
        initialValues:{
            firstname: "",
            lastname: "",
            phone: "",
            address: "",
            licenseNumber: "",
            drivingLicenseExpiry: "",
            email: "",
            ghanaCard: "",
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