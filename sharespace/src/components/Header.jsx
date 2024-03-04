import { useState } from "react";
import logo from "../assets/logo.png"
import { useEffect } from "react";




const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("hide-header").style.top = "0px";
      } else {
        document.getElementById("hide-header").style.top = "-80px";
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div id="hide-header" style={{ position: 'fixed', width: '100%', zIndex: '100' }} className={`text-[0.95rem] p-2  font-sans backdrop-blur-sm bg-[#00000000] duration-150`}>
      <div className="flex justify-between ml-10 mr-2">
        <div className="basis-1/6 flex gap-x-2 my-auto mr-2">
          <img src={logo} alt="logo" className="w-9 h-9 my-auto invert-[100%]" />
          <div className="my-auto font-mono text-[1.123rem] mr-1">ShareSpace</div>
        </div>
        <div className="flex w-full my-auto">
          <div className="flex gap-x-10 text-[#d6d6d6]">
            <p className="cursor-pointer hover:text-slater">Pricing</p>
            <p className="cursor-pointer hover:text-slater">Features</p>
            <p className="cursor-pointer hover:text-slater">Vision</p>
            <p className="cursor-pointer hover:text-slater">FAQs</p>
          </div>
        </div>
        <div className="flex gap-x-[0.9rem] my-auto basis-[20%] min-w-[234px]">
          <p className="cursor-pointer text-red p-[0.4rem] w-full text-center rounded-md border-slate text-[#d6d6d6] border basis-2/3">Try for free</p>
          <p className="text-[#d6d6d6] bg-blue p-[0.4rem] w-full text-center rounded-md basis-1/3">Sign in</p>
        </div>
      </div>
    </div>)
}

export default Header;