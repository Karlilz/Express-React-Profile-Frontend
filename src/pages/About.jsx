import { useLoaderData } from "react-router-dom";


function About(props) {

  const about = useLoaderData()

  return <div>
      {/* <h1>{about.name}</h1> */}
      {/* <h2 style={{textTransform:'uppercase'}}>{about.title}</h2> */}
      {/* <h3>{about.email}</h3> */}
      <p>{about.bio}</p>
      <img src={about.headshot} alt="Your Headshot"/>
    </div>
}

export default About;