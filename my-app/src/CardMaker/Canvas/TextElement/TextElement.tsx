import { CanvasElement } from '../../../CardMakerTypes'
import './TextElement.css'

type TextElementProps = {
    textElement: CanvasElement,
}

function TextElement(props: TextElementProps) {
    const style = {
        top: props.textElement.posY,
        left: props.textElement.posX,
        fontSize: props.textElement.text?.size,
        fontWeight: props.textElement.text?.bold ? 700 : 400,
        textDecoration: props.textElement.text?.underline ? 'underline' : 'none',
        fontStyle: props.textElement.text?.italic ? 'italic' : 'none',
        fontFamily: props.textElement.text?.fontFamily,
    }

    return(
        <span className="element" style={style}>{props.textElement.text?.text}</span>
    );
}

export default TextElement;