import { AuthService } from '@/services/AuthService';
import { Navigate } from 'react-router-dom';
import LoginForm from '@/components/login/login';

const LoginPage = () => {
    const handleLogin = (formData: { mobile: string; password: string }) => {
        AuthService.login(formData.mobile, formData.password);
        return <Navigate to="/home" replace />;
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <LoginForm onSubmit={handleLogin}/>
        </div>
    )
}

export default LoginPage;
