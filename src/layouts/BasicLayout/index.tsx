import React from 'react';
import { Shell } from '@alifd/next';
import { store, useAuth } from 'ice';
import PageNav from './components/PageNav';
import GlobalSearch from './components/GlobalSearch';
import Notice from './components/Notice';
import SolutionLink from './components/SolutionLink';
import HeaderAvatar from './components/HeaderAvatar';
import Logo from './components/Logo';
import Footer from './components/Footer';

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  const [authUser, userDispatcher] = store.useModel('user');
  const [, setAuth] = useAuth();

  const logout = () => {
    userDispatcher.logout();
    setAuth({ guest: true });
  };

  return (
    <Shell
      type="brand"
      style={{
        minHeight: '100vh',
      }}
    >
      <Shell.Branding>
        <Logo image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" text="Logo" />
      </Shell.Branding>
      <Shell.Navigation
        direction="hoz"
        style={{
          marginRight: 10,
        }}
      >
        <GlobalSearch />
      </Shell.Navigation>
      <Shell.Action>
        <Notice />
        <SolutionLink />
        <HeaderAvatar name={authUser.name} mail={authUser.mail} avatar={authUser.avatar} logout={logout} />
      </Shell.Action>
      <Shell.Navigation>
        <PageNav />
      </Shell.Navigation>

      <Shell.Content>{children}</Shell.Content>
      <Shell.Footer>
        <Footer />
      </Shell.Footer>
    </Shell>
  );
}
