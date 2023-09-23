import Open from "./Open";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Open closedHour={closedHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closedHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
