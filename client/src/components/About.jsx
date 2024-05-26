import data from "../data/about_data.js";

function List(props) {
    return (
        <li className="flex space-x-2">
            <span><img src="./svg/pointer.svg" alt="SVG" className="w-6 h-6" /></span>
            <span className="text-light-gray">{props.statement}</span>
        </li>
    )
}

const About = () => {
    return (
        <div id='about' className="flex flex-col mx-10 p-5 justify-center min-h-screen">
            <h1 className="font-saira font-bold text-dynamic text-custom-gray leading-none m-0">ABHISHEK <span className="font-saira text-theme">YADAV</span></h1>
            <h2 className="font-saira font-bold text-dynamic-100 text-light-gray mb-10">
                GUNA, IND 473226 · (+91) 8318798481 · 
                <a className='font-saira text-theme' href="mailto:abhicsjuet@gmail.com"> ABHICSJUET@GMAIL.COM</a>
            </h2>

            <ul>
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => <List statement={dataItem.statement} />)
                        : <div>Data Not Found!!</div>
                }
            </ul>

            <div className="flex mt-10 space-x-4">
                <a className="rounded-full bg-custom-gray overflow-hidden flex justify-center items-center" href="www.linkedin.com/in/abhicsjuet" target='_blank' style={{ width: '3.5rem', height: '3.5rem' }}>
                    <img className="object-cover fill-white" src="./svg/linkedin.svg" alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </a>
                <a className="rounded-full bg-custom-gray overflow-hidden flex justify-center items-center" href="https://github.com/BeyondSolar" target='_blank' style={{ width: '3.5rem', height: '3.5rem' }}>
                    <img className="object-cover fill-white" src="./svg/github.svg" alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </a>
                <a className="rounded-full bg-custom-gray overflow-hidden flex justify-center items-center" href="https://leetcode.com/u/abhicsjuet/" target='_blank' style={{ width: '3.5rem', height: '3.5rem' }}>
                    <img className="object-cover fill-white" src="./svg/leetcode.svg" alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </a>
            </div>

        </div>
    )
}

export default About;