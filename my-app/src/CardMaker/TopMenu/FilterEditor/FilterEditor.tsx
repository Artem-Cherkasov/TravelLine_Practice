import './FilterEditor.css'
import FilterEditorButton from './FilterEditorButton/FilterEditorButton';
import FilterEditorField from './FilterEditorField/FilterEditorField';

function FilterEditor() {
    return(
        <div className="filtereditor">
            <FilterEditorButton />
            <FilterEditorField />
            <div className="filtereditor-bottom"><div className="filtereditor-description">Фильтр</div></div>
        </div>
    )
}

export default FilterEditor;