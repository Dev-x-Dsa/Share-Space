const Header=()=>{
    return (
    <div className="bg-purple-600 text-xl py-2">
        <div className="flex justify-between mx-10">
            <div>
                Logo
            </div>
            <div className="flex gap-x-10">
                <p>Home</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className="flex gap-x-10">
                <p>Try for free</p>
                <p>Sign in</p>
            </div>
        </div>
    </div>)
}

export default Header;