import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();

  function home() {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  useEffect(() => {
    home();
  }, []);
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold text-center">Do zobaczenia</h2>
    </div>
  );
}

export default Logout;
