import './ElementEditor.css'
import ElementEditorButton from './ElementEditorButton/ElementEditorButton';

function ElementEditor() {
    return(
        <div className="elementeditor">
            <ElementEditorButton buttonName={'Выделить элементы'} />
            <ElementEditorButton buttonName={'Удалить выбраные'} />
            <div className="elementeditor-bottom"><div className="elementeditor-description">Выделить</div></div>
        </div>
    )
}

export default ElementEditor;