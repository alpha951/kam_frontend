import { ReactNode } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { AuthService } from '@/services/AuthService';

interface MainLayoutProps {
    children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold">Key Account Management</h1>
                    <Button variant="ghost" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </header>

            {/* Sidebar and Main Content */}
            <div className="flex h-[calc(100vh-4rem)]">
                {/* Sidebar */}
                <aside className="w-64 border-r bg-muted/50">
                    <nav className="p-4 space-y-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => navigate('/accounts')}
                        >
                            Accounts
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => navigate('/users')}
                        >
                            Users
                        </Button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-auto">
                    <div className="container mx-auto p-6">
                        {children || <Outlet />}
                    </div>
                </main>
            </div>
        </div>
    );
}

