import Badge from "@/ui/Badge";

const Badges = ({ tools }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tools.map((tool) => (
        <Badge key={tool.name} name={tool.name} />
      ))}
    </div>
  );
};

export default Badges;
