import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollManager from './ScrollManager';

// Shared chrome for every route: header, footer and scroll handling live here, not in pages.
const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
    >
      Skip to content
    </a>
    <ScrollManager />
    <Header />
    <main id="main" className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
