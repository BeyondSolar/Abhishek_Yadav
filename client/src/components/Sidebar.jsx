
const Sidebar = () => {
    return (
        <div className="font-black text-lg text-gray-200 leading-6 tracking-wider">
            <ul className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-white">
                    <div className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden">
                        <img src="./images/abhi_profile.jpg" alt="Inside Circle" className="w-28 h-28 object-cover" />
                    </div>
                </div>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#certifications">CERTIFICATIONS</a></li>
                <li><a href="#resume">RESUME</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;