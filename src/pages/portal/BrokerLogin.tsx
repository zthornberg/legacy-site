import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Card, Eyebrow, TextLink } from '../../components/ui';
import { SITE_EMAIL } from '../../lib/site';

const BrokerLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (success) {
      navigate('/portal');
    } else {
      setError('That email and password combination did not match. Check both and try again.');
    }
  };

  // Already signed in: go straight to the dashboard.
  if (user) return <Navigate to="/portal" replace />;

  return (
    <div className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center bg-paper-deep px-5 py-16 sm:px-6 md:py-24">
      <div className="w-full max-w-md">
        <Card padding="lg">

          <Eyebrow as="p" className="">
            Broker portal
          </Eyebrow>
          <h1 className="mt-3 font-display text-display-md text-ink">Sign in</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-mute">
            Listings, buyer search, documents and HQ requests for licensed brokers.
          </p>

          {error && (
            <Card padding="sm" className="mt-6 py-4" as="div">
              <p role="alert" className="flex items-start gap-2.5 text-sm text-red-700">
                <AlertCircle size={16} strokeWidth={1.75} className="mt-0.5 shrink-0" aria-hidden />
                <span>{error}</span>
              </p>
            </Card>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="login-email" className="label">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field"
                placeholder="you@firm.com"
                aria-invalid={error ? true : undefined}
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="login-password" className="label">
                  Password
                </label>
                <a
                  href={`mailto:${SITE_EMAIL}?subject=Broker%20portal%20password%20reset`}
                  className="mb-1.5 text-[13px] text-mute underline decoration-mute/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="login-password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field"
                aria-invalid={error ? true : undefined}
              />
            </div>

            <Button type="submit" size="lg" full disabled={isLoading} className="!mt-7">
              {isLoading ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>

          {import.meta.env.DEV && (
            <div className="hint mt-6 border-t border-line pt-5">
              <p>Demo access, development builds only</p>
              <p className="tabular mt-1 text-mute-strong">broker@legacy.com · password</p>
            </div>
          )}
        </Card>

        <div className="mt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-mute">Access is limited to licensed Legacy brokers.</p>
          <TextLink to="/licensing/program" tone="ink">
            Explore the licensing program
          </TextLink>
        </div>
      </div>
    </div>
  );
};

export default BrokerLogin;
