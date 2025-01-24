const Education = () => {
    const education = ([
        {
            name: "Eržvilko Gimnazija",
            time: "2009 - 2021",
            comments: "Primary and secondary school"

        },
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
        <section className = "education">
            <h2>Education</h2>
            {education.map((place) => 
                <article>
                    <h2>{place.name}</h2>
                    <p>{place.time}</p>
                    <p>{place.comments}</p>
                </article>
            )}
        </section>
    )
}

export default Education