const Introduction = ({ textAlign = "text-left", children }) => {
  return <div className={`mb-28 mt-10 font-thin ${textAlign}`}>{children}</div>;
};

const Home = () => {
  return (
    <>
      <h2 className="text-[33px] leading-[40px] tablet:text-[55px] tablet:leading-[65px]">
        Building a digital world with elegant{" "}
        <span className="font-bold">Frontend</span> and powerful{" "}
        <span className="font-bold">Backend</span> skills.
      </h2>
    </>
  );
};

const About = () => {
  return (
    <>
      <h2 className="text-[25px] leading-[30px] tablet:text-5xl laptop:text-8xl">
        <span className="font-bold">About me</span>, A Fullstack Web Developer
        Living In Karawang
      </h2>
    </>
  );
};

const Works = () => {
  return (
    <>
      <h5 className="font-normal uppercase tracking-[10px] text-primary tablet:text-xl laptop:font-thin">
        my works
      </h5>
      <h2 className="text-[42px] capitalize leading-[55px] tablet:text-8xl tablet:leading-[100px]">
        Creating <span className="font-bold">unforgettable</span> digital{" "}
        <span className="font-bold">impressions</span>
      </h2>
    </>
  );
};

const Detail = () => {
  return (
    <>
      <h5 className="font-normal uppercase tracking-[10px] text-primary tablet:text-xl laptop:font-thin">
        sangkuriang
      </h5>
      <h2 className="text-[45px] capitalize leading-[45px] tablet:text-[100px] tablet:leading-[100px]">
        make <span className="font-bold">ordering</span> and{" "}
        <span className="font-bold">purchasing</span> tickets{" "}
        <span className="font-bold">easy</span>
      </h2>
    </>
  );
};

Introduction.Home = Home;
Introduction.About = About;
Introduction.Works = Works;
Introduction.Detail = Detail;

export default Introduction;
