import CurlyArrow from '../assets/CurlyArrow.jsx';
import ButtonGithubLogin from './ui/ButtonGithubLogin.jsx';
import CheckIcon from '../assets/CheckIcon.jsx';
import heroImage from '../assets/hero.png';

const Hero = () => {
  const benefits = [
    'New templates every week.',
    'Access to Slack channel, even for unpaid members.',
    'All assets are included in all templates.'
  ];
  
  return (
    <div className="flex gap-5 md:px-5 pb-3 justify-between">
    <div className="md:w-1/2 flex flex-col gap-3 px-4 md:px-0 md:pt-6">
      <h1 className="text-[1.6rem] md:text-4xl font-[600] md:leading-[2.8rem] mb-2">Improve your HTML and CSS skills by practicing on real design templates.</h1>
      <p className="text-base leading-6">With Codewell, you can browse high quality Figma templates that you can use to sharpen your HTML and CSS skills.</p>
      <ul className="flex flex-col gap-5 justify-center mt-2">
        {benefits.map(text => (
          <li className="list" key={text}>
            <CheckIcon className="check-icon" />
            {text}
          </li>  
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <ButtonGithubLogin className="mt-9" />
        <CurlyArrow className="w-24" />
      </div>
    </div>
      <div className="md:w-1/2 hidden md:flex">
        <img className="w-full self-start" src={heroImage} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
