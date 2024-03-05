import JobExperiences from "@/ui/JobExperiences";
import Introduction from "../ui/Introduction";

const About = () => {
  return (
    <>
      <Introduction textAlign="text-center">
        <Introduction.About />

        <p className="my-10 text-xs font-normal text-primary tablet:text-xl laptop:my-20 laptop:text-3xl laptop:font-thin">
          As a Full Stack Developer with more than 3 years of experience, I
          focus on creating beautiful user-friendly interfaces and optimizing
          system functionality and performance.
        </p>

        <div className="h-80 rounded-xl bg-secondary laptop:h-[640px]">
          {/* img */}
        </div>
      </Introduction>

      <section className="my-[150px] space-y-10">
        {/* <HeaderSection first="job" second="experiences" /> */}

        <JobExperiences
          role="Fullstack Web Developer"
          company="PT. Galuh Citarum"
          since="2022 - NOW"
        />

        <JobExperiences
          role="Junior Web Developer"
          company="University Of Buana Perjuangan Karawang"
          since="2021 - 2022"
        />
      </section>
    </>
  );
};

export default About;
