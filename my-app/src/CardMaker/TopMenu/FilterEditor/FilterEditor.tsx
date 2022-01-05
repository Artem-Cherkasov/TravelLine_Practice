import styles from './FilterEditor.module.css'
import FilterEditorButton from './FilterEditorButton/FilterEditorButton';
import FilterEditorField from './FilterEditorField/FilterEditorField';

function FilterEditor() {
    return(
        <div className={styles.filtereditor}>
            <FilterEditorButton />
            <FilterEditorField />
            <div className={styles.filtereditorbottom}><div className={styles.filtereditordescription}>Фильтр</div></div>
        </div>
    )
}

export default FilterEditor;