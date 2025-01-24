import { useState } from "react"
import Link from "./Link"
const Links = () => {
    const links = [
        {
            name: "Github",
            url: "https://github.com/SimonasGer",
            logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/simonas-gerulis-a72b68319",
            logo: "https://cdnlogo.com/logos/l/78/linkedin-icon.svg"
        }

    ]
    const [current, setCurrent] = useState(0)

    const handleBack = () => {
        if(current === 0){
            setCurrent(links.length - 1)
        } else {
            setCurrent(current - 1)
        }
        console.log(current)

    }

    const handleForth = () => {
        if(current === links.length - 1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
        console.log(current)

    }
    return(
        <section className="links">
            <h2>My Links</h2>
            <h2 className="linkName">{links[current].name}</h2>
            <article>
                <div onClick={handleBack} className="back">{"<"}</div>
                    {links.map((link) => link.name === links[current].name && <Link link = {link}/>)}
                <div onClick={handleForth} className="forth">{">"}</div>
            </article>
        </section>
    )
}

export default Links