import { Link } from "react-router-dom";

const RoundedButton = ({ children, route, location }) => {
  return (
    <Link
      // to={`${name === "stays" ? "/" : "/" + name}`}
      to={route}
      className={`rounded-button flex justify-center items-center gap-2 ${
        location === route ? "border border-solid" : "hover-button"
      }`}
    >
      {children}
    </Link>
  );
};

export default RoundedButton;
