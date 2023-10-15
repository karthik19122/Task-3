import React, { useState } from 'react';

const ColorPicker = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown'];
    const [selectedColor, setSelectedColor] = useState('pink'); // Initialize with the default color

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div style={{ backgroundColor: selectedColor, padding: '1rem' }}>
            <h1 style={{ fontWeight: 'bold' }}>Color Picker</h1>
            <p>Pick a color:</p>
            <div style={{ display: 'flex' }}>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{
                            backgroundColor: color,
                            width: '2rem',
                            height: '2rem',
                            marginRight: '0.5rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleColorClick(color)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;