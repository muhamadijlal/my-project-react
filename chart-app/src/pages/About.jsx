import Card from "../components/Card";
import imgURL from "../assets/about.jpg";

const About = () => {
  return (
    <Card
      imgURL={imgURL}
      desc={
        "We started operations in 2020. We guarantee fresh produce. Save time by shopping on our app and we'll deliver the products right to your home. We use Stripe to process your payment."
      }
      title={"About Us"}
    />
  );
};

export default About;
