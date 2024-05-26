const Education = ()=>{
    return (
        <div id='education' className="flex flex-col justify-center p-5 mx-10 min-h-screen">
            <h1 className="font-saira font-bold text-superheading leading-none mb-10">EDUCATION</h1>

            <div className="flex justify-between items-center">

                <div className="flex flex-col justify-center">
                    <h1 className="font-saira font-bold text-heading">JAYPEE UNIVERSITY OF ENGINEERING AND TECHNOLOGY</h1>
                    <h2 className="font-saira text-subheading text-light-gray mb-5">BACHELOR OF TECHNOLOGY</h2>
                    <h3 className="font-muli text-content text-light-gray ">COMPUTER SCIENCE AND ENGINEERING <br /> CGPA : 7.1</h3>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src="./images/juet_logo.jpeg" alt="" />
                    <h1 className="font-muli text-content text-light-gray mt-5">AUGUST 2020 - PRESENT</h1>
                </div>
            </div>
        </div>
    )
}

export default Education;