import "./Canvas.css"
import { CanvasUnit, TextUnit, Img, ArtObj, CanvasElement} from "../../CardMakerTypes"
import { ReactElement } from "react";
import TextElement from "./TextElement/TextElement";
import ImgElement from "./ImgElement/ImgElement";
import ArtObjElement from "./ArtObjElement/ArtObjElement";

type CanvasProps = {
    canvas: CanvasUnit,
}

function Canvas(props: CanvasProps) {

    let background: string = "#ffffff"

    const color: string | null = props.canvas.background.color;
    const src: string | null = props.canvas.background.src;
    if (color) {
        background = color
    } else if (src) {
        background = 'url(' + src + ')'
    }

    const style = {
        width: props.canvas.width,
        height: props.canvas.height,
        background: background,    
    }

    let elementList: ReactElement[] = [];
    props.canvas.elementList.forEach(element =>{
        switch(element.type) {
            case 'text':
                elementList.push(<TextElement textElement={element as CanvasElement} />);
                break;
            case 'img':
                elementList.push(<ImgElement imgElement={element as CanvasElement} />);
                break;
            case 'artObj':
                elementList.push(<ArtObjElement artObjElement={element as CanvasElement} />);
                break;
        } 
    });

    return(
        <div className="canvas" style={style} id="canvas">
            {elementList}
        </div>
    )
}

export default Canvas;