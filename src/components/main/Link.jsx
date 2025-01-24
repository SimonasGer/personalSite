const Link = ({link}) => {
    return(
        <div className="logo">
            <a href={link.url}><img height={250} src={link.logo} alt={link.name}/></a>
        </div>
    )
}

export default Link