import { HiArrowRight } from "react-icons/hi2";

import Data from "@/data";

import Card from "@/ui/Card";
import Content from "@/ui/Content";
import ButtonLink from "@/ui/ButtonLink";
import Introduction from "@/ui/Introduction";
import CardProfile from "@/ui/CardProfile";

const Home = () => {
  return (
    <>
      <Introduction>
        <Introduction.Home />

        <ButtonLink type="dark" link="#">
          <span className="font-bold">contact</span> me
        </ButtonLink>
      </Introduction>

      <Content>
        <Content.Title first="about" second="me" />

        <Content.Column styles="bg-primary tablet:p-10 p-5 rounded-3xl">
          <p className="text-justify text-xl font-thin leading-8 text-white tablet:text-3xl">
            Hi i’m haidar ijlal and I aim to create&nbsp;
            <span className="font-bold">amazing</span> digital&nbsp;
            <span className="font-bold">experiences</span>. With expertise in
            combining <span className="font-bold">front-end</span> and&nbsp;
            <span className="font-bold">back-end</span> technologies, I
            create&nbsp;
            <span className="font-bold">innovative</span>, high-performance
            web&nbsp;
            <span className="font-bold">solutions</span>.
          </p>
          <CardProfile />
        </Content.Column>
      </Content>

      <Content>
        <Content.Title first="my latest" second="works" />

        <Content.Column>
          {Data.map((data) => (
            <Card data={data} key={data.name} />
          ))}
          <div>
            <ButtonLink type="standart" link="/works">
              view all&nbsp;
              <span className="font-bold">works</span>
              <HiArrowRight />
            </ButtonLink>
          </div>
        </Content.Column>
      </Content>
    </>
  );
};

export default Home;
