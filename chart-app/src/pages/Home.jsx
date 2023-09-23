import imgURL from "../assets/home.jpg";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Card
      title={"Online shopping simplified"}
      desc={
        "Order your groceries from SuperM with our easy to use app, and getyour products delivered straight to your doorstep"
      }
      imgURL={imgURL}
    >
      <button
        onClick={() => navigate("/products")}
        className="px-4 py-3 rounded-sm bg-cyan-500 hover:bg-cyan-700 text-xs font-semibold text-white"
      >
        start shoping
      </button>
    </Card>
  );
};

export default Home;
