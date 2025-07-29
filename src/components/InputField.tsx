import React from "react";


function InputField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

export default React.memo(InputField);