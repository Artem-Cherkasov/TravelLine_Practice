import { useRef } from 'react';
import styles from './CanvasEditor.module.css'
import CanvasEditorField from './CanvasEditorField/CanvasEditorField';

const inputWidth = useRef<HTMLInputElement>(null);
const inputHeight = useRef<HTMLInputElement>(null);

function CanvasEditor() {
    return(
        <div className={styles.canvaseditor}>
            <div className={styles.canvaseditorsize}>
                <CanvasEditorField fieldName={'Высота'} defaultValue={800}  />
                <div className={styles.mult}>X</div>
                <CanvasEditorField fieldName={'Ширина'} defaultValue={600} />            
            </div>
            <div className={styles.canvaseditorbottom}><div className={styles.canvaseditordescription}>Холст</div></div>
        </div>
    )
}

export default CanvasEditor;