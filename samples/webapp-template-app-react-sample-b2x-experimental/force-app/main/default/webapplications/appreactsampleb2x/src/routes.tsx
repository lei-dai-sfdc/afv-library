import type { RouteObject } from 'react-router';
import AppLayout from './appLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Dashboard from "@/pages/Dashboard";
import Maintenance from "@/pages/Maintenance";
import PropertyListings from "@/pages/PropertyListings";
import PropertyDetails from "@/pages/PropertyDetails";
import Application from "@/pages/Application";
import HelpCenter from "@/pages/HelpCenter";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { showInNavigation: true, label: "Home" }
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        handle: { showInNavigation: true, label: "Dashboard" }
      },
      {
        path: "properties",
        element: <PropertyListings />,
        handle: { showInNavigation: true, label: "Property Search" }
      },
      {
        path: "property/:id",
        element: <PropertyDetails />
      },
      {
        path: "maintenance",
        element: <Maintenance />,
        handle: { showInNavigation: true, label: "Maintenance" }
      },
      {
        path: "application",
        element: <Application />
      },
      {
        path: "help",
        element: <HelpCenter />,
        handle: { showInNavigation: true, label: "Help Center" }
      }
    ]
  }
];
