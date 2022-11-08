function Topics(props){
    console.log(props)
    return (
        <div className="divTopics">
            <div className="topic">
                <img src={props.src}></img>
                <h4 className="topicTitle">{props.title}</h4>
                <p className="topicText">{props.text}</p>
            </div>
        </div>
    )
}

export default Topics;