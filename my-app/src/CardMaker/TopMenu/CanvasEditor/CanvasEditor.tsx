import './CanvasEditor.css'
import CanvasEditorField from './CanvasEditorField/CanvasEditorField';

function CanvasEditor() {
    return(
        <div className="canvaseditor">
            <div className="canvaseditor-size">
                <CanvasEditorField fieldName={'Высота'} />
                <div className="mult">X</div>
                <CanvasEditorField fieldName={'Ширина'} />            
            </div>
            <div className="canvaseditor-bottom"><div className="canvaseditor-description">Холст</div></div>
        </div>
    )
}

export default CanvasEditor;