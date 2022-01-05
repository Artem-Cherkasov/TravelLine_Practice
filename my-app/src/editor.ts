import { CardMakerType } from "./CardMakerTypes"
import { testCardMaker } from "./TestData"

let cardMaker: CardMakerType = testCardMaker
let editorChangeHandler: any = null

export function getCardMaker() {
    return cardMaker
}

export function setCardMaker(newCardMaker: CardMakerType) {
    cardMaker = newCardMaker
}

export function addEditorChangeHandler(handler: any) {
    editorChangeHandler = handler
}

export function dispatch(modifyFn: Function, payload: Object) {
    const newCardMaker = modifyFn(cardMaker, payload)
    setCardMaker(newCardMaker)

    if (editorChangeHandler) 
    {
        editorChangeHandler()
    }
}

export function editBackgroundColor(cardMaker: CardMakerType, newColor: string): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            background: {
                color: newColor,
                src: null,
            },    
        }
    };
}

export function editCanvasWidth(cardMaker: CardMakerType, newWidth: number): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            width: newWidth,
        }
    };
}

export function editCanvasHeight(cardMaker: CardMakerType, newHeight: number): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            height: newHeight,
        }
    };
}

export function editFilterColor(cardMaker: CardMakerType, newColor: string): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            currentFilter: {
                color: newColor,
                transparency: 0.5,
            }    
        }
    };
}

export function editFilterTransparency(cardMaker: CardMakerType, newTransparency: number): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            currentFilter: {
                ...cardMaker.canvas.currentFilter,
                transparency: newTransparency,
            }
        }
    };
}

export function createTextElement(cardMaker: CardMakerType, newId: number): CardMakerType {
    const standartWidthElement = 100;
    const standartHeightElement = 50;
    const standartSizeText = 32;
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: [
                ...cardMaker.canvas.elementList,
                {
                    id: newId,
                    type: 'text',
                    width: standartWidthElement,
                    height: standartHeightElement,
                    posX: cardMaker.canvas.width / 2,
                    posY: cardMaker.canvas.height / 2,
                    text: {
                        text: 'Новый текст',
                        size: standartSizeText,
                        bold: false,
                        italic: false,
                        underline: false,
                        fontFamily: 'Calibri',
                    },
                    
                }
            ],    
        }
    };
}