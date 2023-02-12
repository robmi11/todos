import { useRouteError, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Nofound() {
  const error = useRouteError();
  console.log(error.data);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2>Opppssss...</h2>
      <p>{error.data}</p>
      <Link to="/">
        <FaHome size={40} />
      </Link>
    </div>
  );
}

export default Nofound;
