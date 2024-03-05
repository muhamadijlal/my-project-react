import Badges from "@/ui/Badges";
import ButtonLink from "@/ui/ButtonLink";

const Card = ({ data }) => {
  const { name, category, tools } = data;

  return (
    <div className="w-full">
      <div className="h-60 rounded-xl bg-secondary">
        {/* <img src="" alt="" /> */}
      </div>

      <Badges tools={tools} />

      <div className="mt-14 flex items-center justify-between">
        <div className="w-2/3 space-y-2">
          <h4 className="truncate text-xs font-medium uppercase tracking-[10px] tablet:text-base">
            {name}
          </h4>
          <h5 className="text-[10px] font-light uppercase tracking-[4px] text-secondary tablet:text-[12px]">
            {category}
          </h5>
        </div>

        <ButtonLink type="icon" link="/home" />
      </div>
    </div>
  );
};

export default Card;
