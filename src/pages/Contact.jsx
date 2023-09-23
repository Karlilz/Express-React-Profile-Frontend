import React from "react";
import { useLoaderData } from "react-router-dom";


function Contact (props) {
  const contact = useLoaderData()

  return (
    <div style={{fontSize:'12px'}}>
      <h1><b>Email:</b> <a href="mailto:klazarte2000@gmail.com">klazarte2000@gmail.com</a></h1>
      <h1><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/karla-lazarte/">https://www.linkedin.com/in/karla-lazarte/</a></h1>
      <h1><b>GitHub:</b><a href="https://github.com/Karlilz">https://github.com/Karlilz</a></h1>
    </div>
  );
}

export default Contact;
