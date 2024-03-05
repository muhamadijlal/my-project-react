import { Link, NavLink } from "react-router-dom";
import { HiArrowRight, HiArrowSmallRight } from "react-icons/hi2";

const ButtonLink = ({ type, link, children }) => {
  if (type === "dark")
    return (
      <NavLink
        className="mt-6 flex w-full flex-row-reverse tablet:mt-12 "
        to={link}
      >
        <div className="group flex w-32 items-center justify-between rounded-full bg-primary py-[5px] pe-[5px] ps-3 tablet:w-[300px] tablet:ps-7">
          <h3 className="text-xs font-thin uppercase text-white group-hover:text-tertiary tablet:text-3xl">
            {children}
          </h3>
          <div className="flex size-6 items-center justify-center rounded-full bg-white text-xs group-hover:bg-tertiary tablet:size-12 tablet:text-3xl">
            <HiArrowSmallRight />
          </div>
        </div>
      </NavLink>
    );

  if (type === "outline")
    return (
      <Link
        to={link}
        className="flex items-center justify-center gap-2 rounded-full border-2 border-primary py-2 font-thin capitalize hover:bg-primary hover:text-white tablet:py-4 tablet:text-2xl"
      >
        <span className="font-bold">visit</span> website <HiArrowRight />
      </Link>
    );

  if (type === "icon")
    return (
      <NavLink
        className="rounded-full border border-primary px-8 py-3 text-primary hover:bg-primary hover:text-white tablet:text-xl"
        to={link}
      >
        <HiArrowRight />
      </NavLink>
    );

  if (type === "standart")
    return (
      <NavLink
        to={link}
        className="flex items-center justify-center text-xs font-thin uppercase tracking-[10px] text-primary tablet:text-base"
      >
        {children}
      </NavLink>
    );
};

export default ButtonLink;
