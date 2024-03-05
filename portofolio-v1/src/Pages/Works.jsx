import Data from "@/data";

import Card from "@/ui/Card";
import Introduction from "../ui/Introduction";
import Content from "../ui/Content";

const Works = () => {
  return (
    <>
      <Introduction>
        <Introduction.Works />
      </Introduction>

      <Content.Column>
        {Data.map((data) => (
          <Card data={data} key={data.name} />
        ))}
      </Content.Column>

      <Content>
        <p className="flex items-center justify-center text-xs font-thin uppercase tracking-[5px] text-primary tablet:text-base tablet:tracking-[10px]">
          <span className="font-bold">have</span>&nbsp;a nice&nbsp;
          <span className="font-bold">projects</span>&nbsp;?
        </p>

        <h1 className="text-center text-[35px] font-thin uppercase tablet:text-[45px]">
          <span className="font-bold">let&apos;s talk</span>
          <span className="block">with me</span>
        </h1>

        <div className="flex flex-col items-center justify-center gap-2 text-sm">
          <p className="font-light">mail to :</p>
          <h1 className="font-bold">
            m.haidarijlal<span className="font-thin">@gmail</span>.com
          </h1>
        </div>
      </Content>
    </>
  );
};

export default Works;
