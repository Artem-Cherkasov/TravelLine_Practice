import { sign } from "crypto";
import {
    CanvasElement,
    Background,
    CanvasUnit,
} from "./CardMakerTypes";

let testSetOfArtObj = {
    cloud: "cloud.png"
}

let testArtObj: CanvasElement = {
    id: 1,
    type: "artObj",
    width: 150,
    height: 150,
    posX: 450,
    posY: 440,
    artObj: {
        type: testSetOfArtObj.cloud
    }
}

let testImg: CanvasElement = {
    id: 2,
    type: "img",
    width: 200,
    height: 300,
    posX: 650,
    posY: 500,
    img: {
        src: "https://avatars.mds.yandex.net/get-zen_doc/4368340/pub_601e4da0f2a56f0eaa36a77e_601e9ea75fadcc22a9eec234/scale_1200"
    }
}

let testText: CanvasElement = {
    id: 2,
    type: "text",
    width: 150,
    height: 150,
    posX: 650,
    posY: 300,
    text: {
        text: "Happy birthday!",
        size: 30,
        fontFamily: "Arial",
        bold: true,
        italic: true,
        underline: true,
    }
}

let testBackgound: Background = {
    color: "#99ffcc",
    src: null,
}

export let testCanvas: CanvasUnit = {
    width: 600,
    height: 800,
    currentFilter: {
        color: "#ffffff",
        transparency: 0,
    },
    elementList: [testArtObj, testImg, testText],
    background: testBackgound,
}


