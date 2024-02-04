import "./Title.css"

function Title({title , text}) {
  return (
        <div className="wrapper_title">
            <span className="title">{title}</span>
            <span className="text">{text}</span>
        </div>
    )
}

export default Title