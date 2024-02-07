import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="text-xl py-2 text-[0.95rem] border-b-slate border-2 font-sans">
            <div className="flex justify-between ml-10 mr-2">
                <div className="basis-1/6 flex gap-x-2 my-auto mr-2">
                    <img src={logo} alt="logo" className="w-9 h-9 my-auto invert-[30%]" />
                    <div className="my-auto font-mono text-[1.123rem] mr-1">ShareSpace</div>
                </div>
                <div className="flex w-full my-auto">
                    <div className="flex gap-x-10 text-dark">
                        <p className="cursor-pointer hover:text-slater">Pricing</p>
                        <p className="cursor-pointer hover:text-slater">Features</p>
                        <p className="cursor-pointer hover:text-slater">Vision</p>
                        <p className="cursor-pointer hover:text-slater">FAQs</p>
                    </div>
                </div>
                <div className="flex gap-x-[0.9rem] my-auto basis-[20%] min-w-[234px]">
                    <p className="cursor-pointer text-red p-[0.4rem] w-full text-center rounded-md border-slate text-blue border basis-2/3">Try for free</p>
                    <p className="text-white bg-blue p-[0.4rem] w-full text-center rounded-md basis-1/3">Sign in</p>
                </div>
            </div>
        </div>)
}

export default Header;