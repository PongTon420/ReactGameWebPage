

function Card(props) {
    return (
        <div className="card">
            <a target="_blank" href={props.href}>
                <img src={props.src} alt={props.alt}></img></a>
            <a><h2>{props.title}</h2></a>
            <p>{props.description}</p>
        </div>
    );
}

export default Card