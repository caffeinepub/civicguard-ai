import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from 'next-themes';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import FileComplaint from './pages/FileComplaint';
import MyComplaints from './pages/MyComplaints';
import ComplaintDetail from './pages/ComplaintDetail';
import VolunteerMarketplace from './pages/VolunteerMarketplace';
import Profile from './pages/Profile';
import Education from './pages/Education';
import Settings from './pages/Settings';
import RTIGenerator from './pages/RTIGenerator';
import ImpactProof from './pages/ImpactProof';
import ProfileSetupModal from './components/auth/ProfileSetupModal';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <>
      <AppLayout />
      <ProfileSetupModal />
    </>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
});

const fileComplaintRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/file-complaint',
  component: FileComplaint,
});

const myComplaintsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/my-complaints',
  component: MyComplaints,
});

const complaintDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/complaint/$id',
  component: ComplaintDetail,
});

const volunteerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/volunteer',
  component: VolunteerMarketplace,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: Profile,
});

const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/education',
  component: Education,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
});

const rtiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rti-generator',
  component: RTIGenerator,
});

const impactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/impact-proof',
  component: ImpactProof,
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  fileComplaintRoute,
  myComplaintsRoute,
  complaintDetailRoute,
  volunteerRoute,
  profileRoute,
  educationRoute,
  settingsRoute,
  rtiRoute,
  impactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <RouterProvider router={router} />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}
