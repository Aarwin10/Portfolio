import Link from "next/link";

import{FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"



const socials = [
  {icons: <FaGithub/>, path: 'https://github.com/Aarwin10'},
  {icons: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/n-aarwin-4343a0292'},
  {icons: <FaYoutube/>, path: ''},
  {icons: <FaTwitter/>, path: ''},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      }
      )}
    </div>
  ); 
}

export default Socials
