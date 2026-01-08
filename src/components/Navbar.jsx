import Logo from '../assets/logo.png';
import { IconMenu2 } from '@tabler/icons-react';
import ButtonGithubLogin from './ui/ButtonGithubLogin.jsx'; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[80px] px-9 pr-4 md:pr-5 w-full rounded-lg bg-white">
      <div className="flex gap-6 items-center">
        <img className="w-36" src={Logo} alt="logo" />
        <ul className="flex gap-3 font-medium text-base tracking-tighter hidden md:flex">
          <li className="nav-list">Subscription</li>
          <li className="nav-list">Challenges</li>
          <li className="nav-list">Blog</li>
        </ul>
      </div>
      <ButtonGithubLogin className="hidden md:flex" />
      <IconMenu2 className="md:hidden" size={42} color="#000"/>
    </nav>
  );
};

export default Navbar;
