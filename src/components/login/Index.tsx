import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import validator from "validator";

const formSchema = z.object({
    mobile: z.string().refine(validator.isMobilePhone),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    }).max(50, {
        message: 'Password must be at most 50 characters long'
    }),
})

export function Index({ onSubmit }: { onSubmit: (values: z.infer<typeof formSchema>) => void }) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mobile: "",
            password: "",
        },
    })

    return (
        <div className="flex items-center justify-center w-full bg-gray-100">
            <div className="w-full max-w-md p-12 bg-white rounded shadow-lg">
                <h1 className="mb-6 text-4xl font-bold text-center">Login to Your Account</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            name="mobile"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile</FormLabel>
                                    <Input {...field} type="tel" maxLength={10} className="w-full text-xl" placeholder="Enter your mobile number" />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Password</FormLabel>
                                    <Input {...field} type="password" className="w-full" placeholder="Enter your password" />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
