import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="laptop:px16 bg-primary px-4 py-7 text-white tablet:px-8">
      <h1 className="text-2xl font-bold tablet:text-4xl">
        Haidar<span className="font-thin">ijlal</span>
      </h1>
      <h3 className="font-thin capitalize tablet:text-xl">
        fullstack web developer
      </h3>

      <div className="mb-14 mt-7 flex flex-col gap-2">
        <NavLink to="/home" className="text-link">
          home
        </NavLink>
        <NavLink to="/about" className="text-link">
          about
        </NavLink>
        <NavLink to="/works" className="text-link">
          my works
        </NavLink>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs font-thin tablet:text-base">
          ©2024 | haidarijlal
        </p>

        <div className="flex items-center gap-4 text-xl tablet:text-3xl">
          <NavLink to="https://github.com">
            <FaGithub className=" hover:text-tertiary" />
          </NavLink>
          <NavLink to="https://instagram.com">
            <FaInstagram className="hover:text-tertiary" />
          </NavLink>
          <NavLink to="https://linkedin.com">
            <FaLinkedin className="hover:text-tertiary" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
