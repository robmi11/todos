import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <nav className="bg-blue-100 flex justify-end items-center h-20">
        <div className="flex justify-between w-fit">
          <Link className="px-10" to="dashboard">
            Panel klienta
          </Link>
          <Link className="px-10" to="login">
            Logowanie
          </Link>
          <Link className="px-10" to="register">
            Rejestracja
          </Link>
        </div>
      </nav>
      <h1 className="text-3xl font-bold text-center">Witaj</h1>
      <section className="mx-auto">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
