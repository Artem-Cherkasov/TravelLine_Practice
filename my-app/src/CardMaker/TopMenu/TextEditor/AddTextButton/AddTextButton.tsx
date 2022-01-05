import { createTextElement, dispatch } from "../../../../editor";
import styles from "./AddTextButton.module.css";

let id: number = 3

function AddTextButton() {
    function onButtonClick() {
        dispatch(createTextElement, id + 1)
    }
    return (
        <button onClick={onButtonClick} className={styles.addtextbutton}><div className={styles.buttontext}>Добавить текст</div></button>
    )
}

export default AddTextButton;