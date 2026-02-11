import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import TrainersPage from './pages/TrainersPage';
import MembershipPlansPage from './pages/MembershipPlansPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import FaqPage from './pages/FaqPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/programs',
  component: ProgramsPage,
});

const trainersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/trainers',
  component: TrainersPage,
});

const membershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/membership',
  component: MembershipPlansPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogIndexPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: BlogPostPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FaqPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  programsRoute,
  trainersRoute,
  membershipRoute,
  galleryRoute,
  contactRoute,
  blogRoute,
  blogPostRoute,
  faqRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
