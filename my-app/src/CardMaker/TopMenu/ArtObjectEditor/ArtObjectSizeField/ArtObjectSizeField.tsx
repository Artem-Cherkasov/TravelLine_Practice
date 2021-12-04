import './ArtObjectSizeField.css'

type ArtObjectSizeFieldProps = {
    fieldName: string,
}

function ArtObjectSizeField(props: ArtObjectSizeFieldProps) {
    return(
        <input className="artobjectsizefield" placeholder={props.fieldName}></input>
    )
}

export default ArtObjectSizeField;