const MainComponent = () => {
    return (<div className="bg-red-700 py-10">
        <div className="flex w-3/4 max-w-[1225px] h-[530px] mx-auto gap-x-6">
            <div className="bg-bluehero rounded-3xl p-2 w-full rounded-tl-[2.3rem] rounded-br-[2.3rem] rounded-tr-[6rem] rounded-bl-[6rem] relative px-6 group">
                <div className="flex flex-col font-mono text-darktext text-[1.05rem] justify-center items-center p-6">
                    <div>DOUBLE A PERFORMANCE</div>
                    <div className="w-full flex items-center justify-center h-full">
                        
                        <img src="https://lh3.googleusercontent.com/JobFyjNMhgApsIzq5pHWLkfciQatMiWIQGzVokcdboGRMIsYrjst6IlO8JvG9mLWSJlgLRnq9tlTqLQ4ylFPRBSuHjJ06BEzvlmERFAJDvf7SMzMjg=w1440-rw-e365" alt="" className="hover:-translate-y-7 duration-700 group-hover:-translate-y-7" />
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 m-6 rounded-full bg-darkerhero h-14 w-14 flex justify-center items-center hover:scale-125 hover:bg-darkhero duration-[400ms] text-white font-bold group-hover:scale-125 group-hover:bg-darkhero">
                    <svg id="close" className="rotate-45 scale-50" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 w-full">
                <div className="bg-goldhero rounded-[2.3rem] p-2 h-full relative group">
                    <div className="flex flex-col font-mono text-darktext text-[1.05rem] justify-center items-center p-6">
                        <div>Battery Champ</div>
                        <div className="text-[5rem] font-sans flex items-end scale-150 text-orange">
                            <span className="text-[6rem]">10</span>
                            <span className="text-[4rem] my-4">hours</span>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 m-6 rounded-full bg-darkerhero h-14 w-14 flex justify-center items-center hover:scale-125 hover:bg-darkhero duration-[400ms] text-white font-bold group-hover:scale-125 group-hover:bg-darkhero">
                        <svg id="close" className="rotate-45 scale-50" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
                    </div>
                </div>
                <div className="bg-greenhero rounded-[2.3rem] p-2 h-full relative group">
                    <div className="flex flex-col font-mono text-darktext text-[1.05rem] justify-center items-center p-6">
                        <div>CRYSTAL CLEAR VIDEOS AND CALLS</div>
                        <div>
                            <img src="https://lh3.googleusercontent.com/9hBvU7vk621fYw7i6ZE0MvR5HobePoM-LOlUd3lojJs-NL5iiUhkLV0jyEzmMsersqZEpTE_GH7drkviS27EAHsrS_dvDkmACB6zyzzSvtPp6zIuISsF=w1440-rw-e36" alt="" className="h-[166px]" />
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 m-6 rounded-full bg-darkerhero h-14 w-14 flex justify-center items-center hover:scale-125 hover:bg-darkhero duration-[400ms] text-white font-bold group-hover:scale-125 group-hover:bg-darkhero">
                        <svg id="close" className="rotate-45 scale-50" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default MainComponent;