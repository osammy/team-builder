import React from 'react';

export const CloseButton = ({color,onClick}) => {
    const btnStyle = {
        color:color ? color : "#000",
        display:"flex",
        justifyContent:"flex-end"
    }
    return <div style={btnStyle} >X</div>
}