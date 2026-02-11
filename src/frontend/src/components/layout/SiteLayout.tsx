import { Outlet } from '@tanstack/react-router';
import HeaderNav from './HeaderNav';
import SiteFooter from './SiteFooter';
import QuickContactActions from '../contact/QuickContactActions';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <QuickContactActions />
    </div>
  );
}
