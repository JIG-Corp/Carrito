import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Navegación',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    displayName: 'Registrar Producto',
    iconName: 'check',
    route: '/ui-components/registry',
  },
  {
    displayName: 'Inventario',
    iconName: 'building-warehouse',
    route: '/ui-components/inventario',
  },
  {
    displayName: 'Control Producto',
    iconName: 'zoom',
    route: '/ui-components/control',
  },
];
