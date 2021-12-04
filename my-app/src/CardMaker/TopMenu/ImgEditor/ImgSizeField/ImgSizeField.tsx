import './ImgSizeField.css'

type ImgSizeFieldProps = {
    size: string,
}

function ImgSizeField(props: ImgSizeFieldProps) {
    return (
        <input className="imgsizefield" placeholder={props.size}></input>
    )
}

export default ImgSizeField;