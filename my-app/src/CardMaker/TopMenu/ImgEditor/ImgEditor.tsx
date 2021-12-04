import "./ImgEditor.css"
import ImgSizeField from "./ImgSizeField/ImgSizeField";
import InsertImgButton from "./InsertImgButton/InsertImgButton";
import InsertingFromPC from "./InsertingFromPC/InsertingFromPC";
import SrcInsertField from "./SrcInsertField/SrcInsertField";

function ImgEditor() {
    return (
        <div className="imgeditor">
            <div className="imgeditor-top">
                <SrcInsertField />
                <InsertImgButton />
            </div>
            <div className="imgeditor-sizefield">
                <ImgSizeField size={"Высота"} /> 
                <div className="multiplication">X</div>
                <ImgSizeField size={"Ширина"} />
                <InsertingFromPC />
            </div>
            <div className="imgeditor-bottom"><div className="imgeditor-description">Изображения</div></div>
        </div>        
    )
}

export default ImgEditor;