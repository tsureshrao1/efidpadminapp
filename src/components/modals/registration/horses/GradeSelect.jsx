import { MultiSelect } from "primereact/multiselect"

const GradeSelect = ({ value, handleChange, label, name, grades, prefix }) => {
    const parsedGrades = grades?.map((grade) => {
        return {
            name: grade,
            code: prefix + grade
        }
    })


    return (
        <>
            <label>{label}</label>
            <MultiSelect
                value={value}
                onChange={handleChange}
                options={parsedGrades || []}
                name={name}
                // valueLabel="code"
                // optionLabel="name"
                optionLabel="name"
                optionValue="code"
                selectAllLabel="Select All"
                // showSelectAll={false}
                placeholder="Select Grade"
                maxSelectedLabels={2}
                selectionLimit={5}
                itemClassName="multi-select-option"
            >

            </MultiSelect>
        </>
    )
}

export default GradeSelect