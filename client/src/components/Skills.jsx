import data from '../data/skills_data.js'
import {skills_description} from '../data/skills_data.js'

function Icons (props){
    return (
        <div className='w-14 h-14 mr-9'>
            <img src={props.loc} alt='image' className='w-full h-full object-contain' />
        </div>
    )
}

function Skills_desc(props){
    return (
        <div className='flex '>
            <span><img src="./svg/pointer.svg" alt="SVG" className="w-6 h-6" /></span>
            <span className="text-light-gray">{props.statement}</span>        
        </div>
    )
}

const Skills = ()=>{
    return(
        <div id='skills' className="flex flex-col justify-center mx-10 p-5 min-h-screen">
            <h1 className="font-saira font-bold text-superheading leading-none mb-10">SKILLS</h1>

            <h2 className="font-saira font-medium text-subheading text-light-gray mb-5">PROGRAMMING LANGAUGES & TOOLS</h2>

            <div className="flex flex-wrap mb-10">
                {
                    data && data.length>0 ? 
                    data.map((dataItem) => <Icons key={dataItem.id} loc={dataItem.location}/>)
                    :<div>Data Not Found!!</div>
                }
            </div>

            <h2 className="font-saira font-medium text-subheading text-light-gray mb-5">AREAS OF INTEREST</h2>

            <div className="flex flex-col mb-5">
                {
                    skills_description && skills_description.length>0 ? 
                    skills_description.map((dataItem) => <Skills_desc statement={dataItem.statement}/>)
                    :<div>Data Not Found!!</div>
                }
            </div>

        </div>
    )
}

export default Skills;