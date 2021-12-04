import { type } from 'os'
import './ElementEditorButton.css'

type ElementEditorButtonProps = {
    buttonName: string,
}

function ElementEditorButton(props: ElementEditorButtonProps) {
    return(
        <button className='elementeditorbutton'><div className="elementeditorbutton__text">{props.buttonName}</div></button>
    )
}

export default ElementEditorButton;