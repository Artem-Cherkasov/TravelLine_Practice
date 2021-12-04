import './BackgroundEditor.css'
import BackgroundEditorButton from './BackgroundEditorButton/BackgroundEditorButton';

function BackgroundEditor() {
    return(
        <div className="backgroundeditor">
            <BackgroundEditorButton buttonName={'Цвет фона'} />
            <BackgroundEditorButton buttonName={'Фон с устр-ва'} />
            <div className="backgroundeditor-bottom"><div className="backgroundeditor-description">Фон</div></div>
        </div>
    )
}

export default BackgroundEditor;