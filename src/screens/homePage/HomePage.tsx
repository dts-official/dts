import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/HeaderMain";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
  const [navActive, setActive] = useState(false);
  return (
      <div className="relative w-full flex flex-col h-screen  overflow-hidden bg-[#ffffff]  box-border">
        <Header navActive={navActive} setActive={setActive} />
        

        <div
          className=" relative flex-col h-full "
          onClick={() => {
            console.log("hello world");
            setActive(false);
          }}
        >
          <Outlet />
        </div>

        <Footer />
      </div>
  );
}

export default HomePage;
