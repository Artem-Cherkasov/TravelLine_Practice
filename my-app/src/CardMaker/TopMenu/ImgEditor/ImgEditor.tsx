import styles from "./ImgEditor.module.css"
import ImgSizeField from "./ImgSizeField/ImgSizeField";
import InsertImgButton from "./InsertImgButton/InsertImgButton";
import InsertingFromPC from "./InsertingFromPC/InsertingFromPC";
import SrcInsertField from "./SrcInsertField/SrcInsertField";

function ImgEditor() {
    return (
        <div className={styles.imgeditor}>
            <div className={styles.imgeditortop}>
                <SrcInsertField />
                <InsertImgButton />
            </div>
            <div className={styles.imgeditorsizefield}>
                <ImgSizeField size={"Высота"} /> 
                <div className={styles.multiplication}>X</div>
                <ImgSizeField size={"Ширина"} />
                <InsertingFromPC />
            </div>
            <div className={styles.imgeditorbottom}><div className={styles.imgeditordescription}>Изображения</div></div>
        </div>        
    )
}

export default ImgEditor;