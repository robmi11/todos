import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";

function Header() {
  const [user, setUser] = useState(false);

  return (
    <header className="flex justify-end h-fit">
      {user ? (
        <Link to="logout" className="flex p-5">
          <FaSignOutAlt size={30} />
          <span className="text-lg font-bold ml-1">Wyloguj</span>
        </Link>
      ) : (
        <>
          <Link to="login" className="flex p-5">
            <FaSignInAlt size={30} />
            <span className="text-lg font-bold ml-1">Zaloguj</span>
          </Link>

          <Link to="register" className="flex p-5">
            <FaUserAlt size={30} />
            <span className="text-lg font-bold ml-1">Rejestarcja</span>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
