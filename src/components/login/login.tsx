import { useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

interface LoginFormProps {
    onSubmit: (data: { mobile: string; password: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
    const [formData, setFormData] = useState({
        mobile: "",
        password: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Card color="transparent" shadow={true} className="p-5">
            <Typography variant="h4" color="blue-gray">
                Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Welcome back! Enter your details to register.
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your mobile number
                    </Typography>
                    <Input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        size="lg"
                        type="tel"
                        placeholder="9999999999"
                        minLength={10}
                        maxLength={10}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        type="password"
                        size="lg"
                        placeholder="********"
                        minLength={6}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            Remember me
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button type="submit" className="mt-6" fullWidth>
                    Login
                </Button>
            </form>
        </Card>
    );
}