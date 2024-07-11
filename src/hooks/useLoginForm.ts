import { useForm } from '@mantine/form'
import React from 'react'

const useLoginForm = () => {
    const form = useForm({
        initialValues:{
            email: '',
            password: '',
        },
        validate:{
            email: (value: string) => 
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                   ? null
                    : 'Invalid email format',
            password: (val: string) =>
                val.length < 6 ? 'Password must be at least 6 characters' : null,
        }
    })

    return form;
}

export default useLoginForm