import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { SparkleIcon } from '@/components/icons';
import { Loader2 } from 'lucide-react';

interface LoginFormValues {
  email: string;
  password: string;
}

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        navigate('/');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Demo login helpers
  const loginAsAdmin = async () => {
    setIsLoading(true);
    try {
      await login('admin@soulseer.com', 'password');
      navigate('/admin');
    } finally {
      setIsLoading(false);
    }
  };

  const loginAsReader = async () => {
    setIsLoading(true);
    try {
      await login('reader@soulseer.com', 'password');
      navigate('/reader');
    } finally {
      setIsLoading(false);
    }
  };

  const loginAsClient = async () => {
    setIsLoading(true);
    try {
      await login('client@soulseer.com', 'password');
      navigate('/client');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-[url('/background-image.png')] bg-cover bg-center bg-no-repeat px-4 py-12">
      <Card className="w-full max-w-md glass">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <SparkleIcon className="h-8 w-8 text-primary animate-glow" />
          </div>
          <CardTitle className="font-alexBrush text-3xl text-primary animate-glow">
            Welcome to SoulSeer
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                disabled={isLoading}
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                disabled={isLoading}
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-4 space-y-2">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-border"></div>
              <span className="relative mx-4 flex-shrink text-xs text-muted-foreground">
                Demo Accounts
              </span>
              <div className="flex-grow border-t border-border"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm" onClick={loginAsClient} disabled={isLoading}>
                Client
              </Button>
              <Button variant="outline" size="sm" onClick={loginAsReader} disabled={isLoading}>
                Reader
              </Button>
              <Button variant="outline" size="sm" onClick={loginAsAdmin} disabled={isLoading}>
                Admin
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}