import { ChangeEvent } from 'react';
import { dispatch, editCanvasHeight, editCanvasWidth } from '../../../../editor';
import styles from './CanvasEditorField.module.css'

type CanvasEditorFieldProps = {
    fieldName: string,
    defaultValue: number,
}
let width: number;
let height: number;        


function CanvasEditorField(props: CanvasEditorFieldProps) {
    const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputData = event.target as HTMLInputElement;
        if (props.fieldName == 'Ширина') {
            width = +inputData.value
            dispatch(editCanvasWidth, width)
        } 
        else if (props.fieldName == 'Высота') {
            height = +inputData.value
            dispatch(editCanvasHeight, height)
        }
    }
    return(
        <input onChange={handlerOnChange} className={styles.canvaseditorfield} placeholder={props.fieldName} defaultValue={props.defaultValue}/>
    )
}

export default CanvasEditorField;