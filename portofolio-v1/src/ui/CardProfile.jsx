import { HiArrowUpRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import ShapeCorner from "./ShapeCorner";

const CardProfile = () => {
  return (
    <div className="relative grid size-full grid-cols-1 gap-2 rounded-[25px] bg-white p-3 tablet:flex-row tablet:gap-5 tablet:p-5">
      <div className="h-44 rounded-[15px] bg-secondary"></div>
      <h3 className="font-regular mt-3 w-1/2 text-4xl tablet:text-4xl">
        Muhamad Haidar Ijlal
      </h3>

      <NavLink
        to="/about"
        className="bounce group absolute -bottom-[1px] -right-[2px] flex h-[65px] w-[55px] items-center justify-center rounded-br-[25px] rounded-tl-[25px] bg-primary transition-all duration-300 hover:h-[80px] hover:w-[85px] tablet:h-[80px] tablet:w-[75px] tablet:hover:h-[100px] tablet:hover:w-[105px]"
      >
        <div className="flex size-8 animate-bounce items-center justify-center rounded-full bg-tertiary text-xs transition-all duration-[450ms] group-hover:size-12 group-hover:animate-none group-hover:text-2xl tablet:size-12 tablet:text-xl tablet:group-hover:size-20 tablet:group-hover:text-3xl">
          <HiArrowUpRight />
        </div>

        {/* top */}
        <ShapeCorner className="absolute -right-[1px] bottom-[63px] size-[24px] -rotate-90 transition-all duration-300 group-hover:bottom-[79px] tablet:bottom-[79px] tablet:group-hover:bottom-[98px]" />

        {/* bottom */}
        <ShapeCorner className="absolute -bottom-[1px] right-[53px] size-[24px] -rotate-90 transition-all duration-300 group-hover:right-[83px] tablet:bottom-[0px] tablet:right-[73px] tablet:group-hover:right-[104px] " />
      </NavLink>
    </div>
  );
};

export default CardProfile;
