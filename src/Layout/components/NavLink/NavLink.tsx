import { FC } from 'react';

import { NavLinkProps } from './interfaces';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink: FC<NavLinkProps> = ({ text, href, className }) => {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) => `
				${className}
				${
          isActive
            ? 'nav__link nav__link--active'
            : 'nav__link '
        }
			`}
    >
      {text}
    </RouterNavLink>
  );
};
