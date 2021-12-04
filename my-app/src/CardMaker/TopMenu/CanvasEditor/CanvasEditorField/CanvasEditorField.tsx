import './CanvasEditorField.css'

type CanvasEditorFieldProps = {
    fieldName: string,
}

function CanvasEditorField(porps: CanvasEditorFieldProps) {
    return(
        <input className="canvaseditorfield" placeholder={porps.fieldName}/>
    )
}

export default CanvasEditorField;