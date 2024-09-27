export const Color = ({ color, markColor }) => {
    const handleColorClick = () => {
        markColor(color); 
    };

    return (
        <span onClick={handleColorClick} style={{ backgroundColor: `${color}` }}></span>
    )
};


