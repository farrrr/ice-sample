import React from 'react';
import { useAuth, Redirect } from 'ice';

export default function withAuth(PageComponent) {
  return (props) => {
    const [auth] = useAuth();

    return auth.guest ? <Redirect to="/auth/login" /> : <PageComponent {...props} />;
  };
}
