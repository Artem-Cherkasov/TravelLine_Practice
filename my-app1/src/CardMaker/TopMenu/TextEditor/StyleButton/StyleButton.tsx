import "./StyleButton.css"

type ButtonProps = {
    src: string,
    alt: string,
}

function StyleButton(props: ButtonProps) {
    return(
        <div className="stylebutton"><div className="stylebutton__text">{props.src}</div></div>
    )
}

export default StyleButton;