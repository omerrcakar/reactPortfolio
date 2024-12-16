import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import resume from "../assets/ÖmerCakar.pdf"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" width={40} height={40} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://github.com/omerrcakar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-black transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ömercakar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@omer1cakar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-700 transition-colors duration-200"
        >
          <FaMedium />
        </a>

        <a 
          href={resume}
          download="ÖmerCakar.pdf"
          className="rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-4 py-2 text-center text-white text-sm shadow-md transition-transform duration-200 hover:scale-105"
          >
            Download CV

        </a>
      </div>
    </nav>
  );
};

export default Navbar;
