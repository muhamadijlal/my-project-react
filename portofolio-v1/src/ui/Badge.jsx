const Badges = ({ name }) => {
  return (
    <span className="inline-block rounded-full bg-tertiary px-5 py-[1px] text-xs font-medium capitalize text-primary tablet:text-base">
      {name}
    </span>
  );
};

export default Badges;
