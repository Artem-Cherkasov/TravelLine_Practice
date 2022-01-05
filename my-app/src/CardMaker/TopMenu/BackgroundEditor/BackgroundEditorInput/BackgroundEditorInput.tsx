import { ChangeEvent } from "react";
import { dispatch, editBackgroundColor } from "../../../../editor";
import styles from "./BackgroundEditorInput.module.css"


function BackgroundEditorInput() {
    const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement;
        dispatch(editBackgroundColor, inputColor.value)
    }
    return(
        <input onChange={handlerOnChange} className={styles.backgroundeditorinput} type="color" id="head" name="color" defaultValue="#ffffff"/>
    )
}

export default BackgroundEditorInput;