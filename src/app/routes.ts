import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { POSSystem } from './pages/POSSystem';
import { MenuManagement } from './pages/MenuManagement';
import { InventoryManagement } from './pages/InventoryManagement';
import { RevenueManagement } from './pages/RevenueManagement';
import { TaxManagement } from './pages/TaxManagement';
import { MenuQR } from "./pages/QRMenu";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'pos', Component: POSSystem },
      { path: 'menu', Component: MenuManagement },
      { path: 'inventory', Component: InventoryManagement },
      { path: 'revenue', Component: RevenueManagement },
      { path: 'tax', Component: TaxManagement },
      { path: 'qrmenu', Component: MenuQR },
    ],
  },
]);