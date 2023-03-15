import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedin, FaInstagram } from "react-icons/fa"
// https://tailwindui.com/components/marketing/sections/team-sections

// const people=[{name:"name",role:"role"},{name:"name",role:"role"},{name:"name",role:"role"},{name:"name",role:"role"},{name:"name",role:"role"},{name:"name",role:"role"}]
const people = []
const SHEET_ID = '1R6T3Ro6dLtuFzyM2bMU73OZ9rNZRUBc-vIxwc574hxU';
const RANGE = 'Sheet1!A1:C3';

const MemberCards = () => {
    
    return (
        <div role="list" className="grid sm:grid-cols-2 lg:grid-cols-4 grid-flow-row p-4 gap-8">
          {people.map((person) => (
            <div key={person.name}>
              <div className="flex flex-col py-12 items-center bg-slate-800 rounded-2xl">
                <img className="h-16 w-16 rounded-full bg-white" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-umd-red">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-white brightness-75">{person.role}</p>
                </div>
                <div>
                    <a className="flex" href="https://www.linkedin.com" target="_blank">
                        <FaLinkedin className="h-8 w-8 text-white"/>
                        <FaInstagram className="h-8 w-8 text-white"/>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

/* <p className="w-full mt-6 text-sm leading-5 text-white brightness-75">
    In June of 2015, a team of undergraduate students assembled to accept the challenge of designing and building one of the very first Hyperloop pods. Diverse, passionate, and driven, the team has worked tirelessly to persevere and compete each year since. At the first competition in January of 2017, the team placed 1st in Performance in Operations, 5th in Overall Design and Construction, and was 1 of 5 teams in the world to qualify to do vacuum runs in SpaceX’s Hyperloop tube. At the second competition in August of 2017, the team was 1 of 6 teams to qualify for SpaceX Tube test runs. Today, the team, still entirely run and staffed by undergraduate students, is pioneering the next generation of high speed transportation, right here at the University of Maryland.
</p> */

const About = () => {

    return (
        <div className="container m-auto">
            <Navbar />
            <div className="mx-8">
                <div className="py-8 sm:py-16">
                    <h2 className="my-12 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">Meet our leadership</h2>
                    <MemberCards />
                </div>
                <div className="py-8 sm:py-16">
                    <h2 className="my-12 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">Team Leads</h2>
                    <MemberCards />
                </div>
                <div className="py-8 sm:py-16">
                    <h2 className="my-12 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">Team Members</h2>
                    <MemberCards />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;