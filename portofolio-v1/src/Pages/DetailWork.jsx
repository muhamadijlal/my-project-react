import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";

import Data from "@/data";
import Card from "@/ui/Card";
import ButtonLink from "@/ui/ButtonLink";
import Introduction from "@/ui/Introduction";
import Content from "@/ui/Content";
import Detail from "@/ui/Detail";

const DetailWork = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const breakPoint = 675;

  const handleWindowResize = () => {
    setIsDesktop(window.innerWidth >= breakPoint);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <Introduction>
        <Introduction.Detail />

        <div className="mt-28 h-80 rounded-xl bg-secondary tablet:h-[600px]"></div>
      </Introduction>

      <Content.Column>
        <Detail.Content>
          <Detail.Title second="about" />
          <p className="text-justify text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, fugit!
          </p>
        </Detail.Content>

        <Detail.Content>
          <Detail.Title first="our" second="clients" />
          <p className="text-justify text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maxime
            qui cupiditate vero voluptas ratione rerum repellendus ea illum!
            Praesentium eligendi voluptatum mollitia ea consequatur similique,
            voluptas nostrum nihil quae quis ratione eum inventore cum porro
            doloribus laudantium magnam pariatur quo autem deserunt saepe
            explicabo! Totam corporis consectetur illum repudiandae, facilis
            illo reiciendis! Aliquam, quod quae.
          </p>
        </Detail.Content>

        <Detail.Content>
          <Detail.Title first="new" second="challenge" />
          <p className="text-justify text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            doloribus quia eligendi consequatur obcaecati animi incidunt
            deserunt debitis illo possimus laboriosam suscipit dignissimos vero
            molestiae deleniti aperiam, corrupti est in ipsa rerum totam
            accusantium saepe eum voluptates! Vel perferendis dicta
            exercitationem ea commodi nesciunt dignissimos voluptatibus, sint
            tenetur eos, illo adipisci. Temporibus commodi corporis earum
            debitis magnam consequuntur doloribus, enim libero laboriosam
            dolorem maiores dolorum! Tempora, aut. Beatae perferendis, nobis
            tempore quod quidem ab assumenda magnam, corrupti eligendi nesciunt,
            sapiente recusandae! Voluptatem explicabo impedit doloribus
            accusantium ducimus voluptatum dolores consequatur, id, voluptate
            iure nihil eos maxime placeat, recusandae eaque sunt.
          </p>
        </Detail.Content>

        <Detail.Content>
          <Detail.Title second="results" />
          <p className="text-justify text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos dolore cupiditate fuga modi provident laborum, illo
            dolorem neque, obcaecati ut voluptate qui ullam libero, placeat id
            soluta vero pariatur inventore corrupti sequi amet deleniti magni.
            Distinctio repudiandae placeat dolores quisquam, ipsam, natus
            laborum a velit delectus perferendis totam eaque accusantium minus
            voluptate atque iste at? Quod magni aliquam doloremque aperiam
            ipsam, illo et vitae commodi ab voluptate illum nam, neque
            reprehenderit harum odit temporibus. Labore consectetur, corrupti
            sapiente sint quia asperiores est ad quam dignissimos accusamus quis
            aliquam maxime quidem earum esse sit dolore quas. Officia maiores
            repellendus incidunt exercitationem quia mollitia facere dolor,
            fugit placeat necessitatibus dolorum perspiciatis consequatur
            quaerat at nulla itaque aperiam non vitae autem dolore consequuntur
            expedita omnis distinctio. Iste, deleniti suscipit? Praesentium esse
            tempora corporis. Consectetur, magnam, fuga vel voluptatum quibusdam
            voluptas quae adipisci, placeat doloribus natus facere numquam
            perferendis quam nisi consequuntur! Fugit ea corporis consequuntur
            distinctio dolorum totam autem nam beatae, ut sit ex recusandae
            architecto. Dolore possimus quia nam dolores velit placeat dolorem
            asperiores adipisci. Dolore sunt laudantium, dolorum architecto
            aliquam soluta autem fugiat inventore voluptas, perspiciatis,
            impedit cum praesentium explicabo at incidunt vel numquam? Dicta in
            est nesciunt atque enim officiis.
          </p>
        </Detail.Content>
      </Content.Column>

      <Content>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-2">
            <h4 className="font-bold uppercase">
              date
              <p className="text-justify font-thin normal-case text-secondary">
                Desember, 30 2023
              </p>
            </h4>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold uppercase">
              client name
              <p className="text-justify font-thin normal-case text-secondary">
                Jhon Doe
              </p>
            </h4>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold uppercase">services</h4>
            <ul className="space-y-1 font-thin normal-case text-secondary">
              <li className="capitalize">web apps</li>
              <li className="capitalize">web design</li>
            </ul>
          </div>
        </div>

        <ButtonLink to="https://google.com" type="outline"></ButtonLink>
      </Content>

      <Content>
        {isDesktop ? (
          <div className="grid grid-rows-2 gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-secondary"></div>
              <div className="grid grid-rows-1 gap-6">
                <div className="h-52 rounded-xl bg-secondary tablet:h-64"></div>
                <div className="h-52 rounded-xl bg-secondary tablet:h-64"></div>
              </div>
            </div>

            <div className="rounded-xl bg-secondary"></div>
          </div>
        ) : (
          <div className="grid grid-rows-2 gap-4">
            <div className="h-48 rounded-xl bg-secondary"></div>
            <div className="grid grid-cols-2 gap-4 rounded-xl">
              <div className="rounded-xl bg-secondary"></div>
              <div className="rounded-xl bg-secondary"></div>
            </div>
            <div className="h-48 rounded-xl bg-secondary"></div>
          </div>
        )}
      </Content>

      <Content>
        <Content.Title first="whats" second="next ?" />
        <Content.Column>
          {Data.map((data) => (
            <Card data={data} key={data.name} />
          ))}

          <ButtonLink type="standart">
            view all&nbsp;<span className="font-bold">works</span>{" "}
            <HiArrowRight />
          </ButtonLink>
        </Content.Column>
      </Content>
    </>
  );
};

export default DetailWork;
