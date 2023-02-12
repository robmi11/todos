import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="min-h-screen grid grid-rows-[80px_1fr_220px]">
      <Header />
      <section className="mt-5 self-start h-full">
        <h1 className="text-3xl font-bold text-center">Witaj, Robert</h1>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default App;
