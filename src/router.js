import { createRoutesFromElements,createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { aboutLoader, projectsLoader, contactLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        {/* <Route path="" element={<Home/>}/> */}
        <Route path="/about" element={<About/>} loader={aboutLoader}/>
        <Route path="/projects" element={<Projects/>} loader={projectsLoader}/>
        <Route path="/contact" element={<Contact/>} loader={contactLoader}/>
    </Route>
))

export default router