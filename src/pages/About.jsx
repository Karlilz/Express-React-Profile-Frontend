import { useLoaderData } from "react-router-dom";

function About(props) {
  const about = useLoaderData();

  return (
    <div>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img
          src={process.env.PUBLIC_URL + '/images/Headshot.png'} alt="Karla Lazarte Headshot"
          style={{width:'300px', height:'300px', marginRight:'8px', marginTop:'10px'}}/>
        <p>{about.bio}</p>
      </div>
    </div>
  );
}

export default About;
