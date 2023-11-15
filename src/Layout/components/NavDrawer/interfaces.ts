export interface NavDrawerProps {
  handleDrawerToggle: () => void;
  navItems: NavItem[];
}

export interface NavItem {
  to: string;
  text: string;
}
