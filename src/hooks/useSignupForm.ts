import { ISignupFormDetails } from '@/models'
import { useForm, UseFormReturnType } from '@mantine/form'

export const useSignupForm = (): UseFormReturnType<ISignupFormDetails> =>{
    const form = useForm({
        initialValues:{
            email: '',
            password: '',
            confirmPassword: '',
            terms : false
        },
        validate:{
            email: (value: string) => 
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                   ? null
                    : 'Invalid email format',
            password: (val: string) =>
                val.length < 6 ? 'Password must be at least 6 characters' : null,
            confirmPassword: (val: string, { password}) =>
                val === password? null : 'Passwords do not match',
            terms: (val: boolean) => val? null : 'You must agree to terms and conditions'
        }
    })

    return form
}