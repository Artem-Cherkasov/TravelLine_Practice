import React from 'react';
import ReactDOM from 'react-dom';
import AddTextButton from './AddTextButton/AddTextButton';
import StyleButton from './StyleButton/StyleButton';
import styles from './TextEditor.module.css'

function TextEditor() {
    return(
        <div className={styles.texteditor}>
            <div className={styles.texteditortop}>
                <div className={styles.fontfield}>Arial</div>
                <AddTextButton />
            </div>
            <div className={styles.texteditormiddle}>
               <div className={styles.sizefield}>12</div> 
               <div className={styles.textstylebuttons}>
                   <StyleButton src='B' alt='bold'/>
                   <StyleButton src='I' alt='italic'/>
                   <StyleButton src='U' alt='underlined'/>
                </div>          
            </div>
            <div className={styles.texteditorbottom}><div className={styles.texteditordescription}>Текст</div></div>
        </div>  
    );
}

export default TextEditor;