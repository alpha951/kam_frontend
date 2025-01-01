import { AuthService } from '@/services/AuthService';
import { Index as Login } from '../components/login/Index'
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    const handleLogin = (formData: { mobile: string; password: string }) => {
        AuthService.login(formData.mobile, formData.password);
        return <Navigate to="/home" replace />;
    }

    return (
        <Login onSubmit={handleLogin} />
    )
}

export default LoginPage;
