const DataLabelValue = ({ label, value }) => {
    const v = typeof value === 'boolean' ? value ? 'Yes' : 'No' : value

    return (
        <>
            <label class="form-label text-gray-dark" >{label}</label>
            <p>{v || "-"}</p>
        </>
    )
}

export default DataLabelValue