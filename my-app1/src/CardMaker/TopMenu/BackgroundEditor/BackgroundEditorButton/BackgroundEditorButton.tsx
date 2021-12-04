import { type } from 'os'
import './BackgroundEditorButton.css'

type BackgroundEditorButtonProps = {
    buttonName: string,
}

function BackgroundEditorButton(props: BackgroundEditorButtonProps) {
    return(
        <button className="backgroundeditorbutton">{props.buttonName}</button>
    )
}

export default BackgroundEditorButton;