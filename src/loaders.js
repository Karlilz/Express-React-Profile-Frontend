const URL = "https://express-react-portfolio-b.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}

export const contactLoader = async () => {
    const response = await fetch(URL + "/contact")
    const contact = await response.json()
    return contact
}