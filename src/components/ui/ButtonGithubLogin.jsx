import GithubLogo from '../../assets/GithubLogo.jsx';

const ButtonGithubLogin = ({ className, color = '#fff', ...props}) => {
  return (
    <button className={`flex bg-cyan-700 py-3 px-5 rounded-full w-fit h-fit items-center gap-2 text-base font-semibold text-white ${className}`} {...props}>
      <GithubLogo size={32} color={color} />
      <span className="hidden md:flex">Login with Github</span>
      <span className="flex md:hidden">Login</span>
    </button>
  );
};

export default ButtonGithubLogin;