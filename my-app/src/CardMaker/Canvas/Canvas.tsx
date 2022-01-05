import styles from "./Canvas.module.css"
import { CanvasUnit, TextUnit, Img, ArtObj, CanvasElement, CardMakerType} from "../../CardMakerTypes"
import { ReactElement } from "react";
import TextElement from "./TextElement/TextElement";
import ImgElement from "./ImgElement/ImgElement";
import ArtObjElement from "./ArtObjElement/ArtObjElement";

type CanvasProps = {
    cardMaker: CardMakerType,
}

function Canvas(props: CanvasProps) {

    let background: string = "#ffffff"

    const color: string | null = props.cardMaker.canvas.background.color;
    const src: string | null = props.cardMaker.canvas.background.src;
    if (color) {
        background = color
    } else if (src) {
        background = 'url(' + src + ')'
    }

    const style = {
        width: props.cardMaker.canvas.width,
        height: props.cardMaker.canvas.height,
        background: background,    
    }

    let elementList: ReactElement[] = [];
    props.cardMaker.canvas.elementList.forEach(element =>{
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

    const filterstyle ={
        width: props.cardMaker.canvas.width,
        height: props.cardMaker.canvas.height,        
        background: props.cardMaker.canvas.currentFilter.color,
        opacity: props.cardMaker.canvas.currentFilter.transparency,
    }

    return(
        <div className={styles.canvas} style={style} id="canvas">                        
            <div className={styles.element}>{elementList}</div>
        </div>
    )
}

export default Canvas;