import React from 'react';
import ReactDOM from 'react-dom';
import StyleButton from './StyleButton/StyleButton';
import './TextEditor.css'

function TextEditor() {
    return(
        <div className='text-editor'>
            <div className='font-field'><div className='field-text'>Arial</div></div>
            <div className='texteditor-middle'>
               <div className='size-field'><div className="field-text">12</div></div> 
               <div className="text-stylebuttons">
                   <StyleButton src='B' alt='bold'/>
                   <StyleButton src='I' alt='italic'/>
                   <StyleButton src='U' alt='underlined'/>
                </div>          
            </div>
            <div className="texteditor-bottom"><div className="texteditor-description">Текст</div></div>
        </div>  
    );
}

export default TextEditor;