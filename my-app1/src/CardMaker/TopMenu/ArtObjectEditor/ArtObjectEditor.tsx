import './ArtObjectEditor.css'
import ArtObjectListButton from './ArtObjectListButton/ArtObjectListButton';
import ArtObjectSizeField from './ArtObjectSizeField/ArtObjectSizeField';

function ArtObjectEditor() {
    return(
        <div className="artobjecteditor">
            <ArtObjectListButton />
            <div className="artobjecteditor-sizefield">
                <ArtObjectSizeField fieldName={'Высота'} />
                <div className="mul">X</div>
                <ArtObjectSizeField fieldName={'Ширина'} />
            </div>            
            <div className="artobjecteditor-bottom"><div className="artobjecteditor-description">Арт-объекты</div></div>
        </div>
    )
}

export default ArtObjectEditor;