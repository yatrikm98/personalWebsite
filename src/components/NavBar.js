
const NavBar = () => {
    return (
        <div className=" bg-black">
            <ul className="flex justify-end navbar">
                <div className="p-2 self-start mr-auto ml-40 font-sacramento font-bold text-indigo-500">YM</div>
                <li className="p-2 mr-2 cursor-pointer text-indigo-500"><a href="#about">About </a></li>
                <li className="p-2 mr-2 cursor-pointer text-indigo-500"><a href="#projects"> Projects</a></li>
                <li className="p-2 mr-2 cursor-pointer text-indigo-500"><a href="#contact"> Contact</a></li>
                <li className="p-2 mr-48 cursor-pointer text-indigo-500"><a >Resume</a></li>
            </ul>
        </div>
    )
}

export default NavBar;