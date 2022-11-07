function Topics(props){
    console.log(props)
    return (
        <div className="divTopics">
            <div>
                <img src={props.src}></img>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Topics;