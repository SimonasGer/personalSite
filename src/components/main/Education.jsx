const Education = () => {
    const education = ([
        {
            name: "Vilnius University",
            time: "2021 - 2022",
            comments: "Studied physics for a year"

        },
        {
            name: "Kauno Informacinių Technologijų Mokykla",
            time: "2024 - 2024",
            comments: "Changed professions and became a programmer"

        }
    ])
    return(
        <section id="education" className = "education">
            <h2>Education</h2>
            {education.map((place) => 
                <article key = {place.name}>
                    <h2>{place.name}</h2>
                    <p>{place.time}</p>
                    <p>{place.comments}</p>
                </article>
            )}
        </section>
    )
}

export default Education