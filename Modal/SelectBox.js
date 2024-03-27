import './SelectBox.css';
const toneOptions = [
    { id: 0, value: '말투' },
    { id: 1, value: '말투1' },
    { id: 2, value: '말투2' },
    { id: 3, value: '말투3' },
    { id: 4, value: '말투4' },
];

const lengthOptions = [
    { id: 0, value: '문장 길이' },
    { id: 'short', value: 'short' },
    { id: 'middle', value: 'middle' },
    { id: 'long', value: 'long' },
];
function SelectBox({ type, onChange }) {
    const options = type === 'tone' ? toneOptions : lengthOptions;
    return (
        <select className="select-box" onChange={onChange}>
            {options.map((option) => (
                <option key={option.id} value={option.value}>
                    {option.value}
                </option>
            ))}
        </select>
    );
}

export default SelectBox;
