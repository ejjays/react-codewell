import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';

const Header = () => {
  return (
    <header className="bg-[#D5EFF7] m-5 min-h-min px-3 md:px-5 lg:px-36 py-5 rounded-[10px] flex items-center flex-col gap-16">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;