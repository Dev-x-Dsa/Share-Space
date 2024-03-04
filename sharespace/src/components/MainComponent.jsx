import temp1 from "../assets/temp1.webp"
import temp2 from "../assets/temp2.webp"
import temp3 from "../assets/cat.gif"

const MainComponent = () => {
    return (
        <div className="w-full text-[#d6d6d6] duration-1000 pt-20 bg-gradient-to-t  from-[#4a2c8a] to-[7%]">

            <div className="w-full flex flex-col text-center text-white text-[50px] font-semibold py-10">
                <p>Works on the device</p>
                <p>that works for you.</p>
            </div>

            <div className="flex flex-col gap-y-40 items-center mx-20">
                <div className="w-full flex items-center gap-x-20">
                    <div className="w-[50%]">
                        <img src={temp2} />
                    </div>
                    <div className="w-[20%] flex flex-col gap-y-20">
                        <div>
                            <p className="text-2xl font-semibold text-white">Award-winning iPhone app</p>
                            <p className="text-[#81859f]">Access your content and collaborate with clients and team members anywhere, on almost any device.</p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-white">Native iPad app</p>
                            <p className="text-[#81859f]">Evaluate color and detail on a bigger Liquid Retina or Liquid Retina XDR display while still roaming freely. Use Split View to keep Frame.io on one side of your screen and whatever else you need on the other.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-end items-center gap-x-20">
                    <div className="w-[20%] flex flex-col gap-y-20">
                        <div>
                            <p className="text-2xl font-semibold text-white">Award-winning iPhone app</p>
                            <p className="text-[#81859f]">Access your content and collaborate with clients and team members anywhere, on almost any device.</p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-white">Native iPad app</p>
                            <p className="text-[#81859f]">Evaluate color and detail on a bigger Liquid Retina or Liquid Retina XDR display while still roaming freely. Use Split View to keep Frame.io on one side of your screen and whatever else you need on the other.</p>
                        </div>
                    </div>
                    <div className="w-[50%] shadow-[0_0px_35px_15px_rgba(255,255,255,0.3)]">
                        <img src={temp3} className="w-full" />
                    </div>
                </div>

                <div className="w-full flex items-center gap-x-20">
                    <div className="w-[50%]">
                        <img src={temp2} />
                    </div>
                    <div className="w-[20%] flex flex-col gap-y-20">
                        <div>
                            <p className="text-2xl font-semibold text-white">Award-winning iPhone app</p>
                            <p className="text-[#81859f]">Access your content and collaborate with clients and team members anywhere, on almost any device.</p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-white">Native iPad app</p>
                            <p className="text-[#81859f]">Evaluate color and detail on a bigger Liquid Retina or Liquid Retina XDR display while still roaming freely. Use Split View to keep Frame.io on one side of your screen and whatever else you need on the other.</p>
                        </div>
                    </div>
                </div>

                <div className="flex text-center flex-col mb-10">
                    <p>Results</p>
                    <p className="text-[40px] text-semibold text-white">
                        Production that's way
                    </p>
                    <p className="text-[40px] text-semibold text-white">
                        more productive
                    </p>
                </div>
            </div>

        </div >
    )
}

export default MainComponent;