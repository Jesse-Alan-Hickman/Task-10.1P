import React from 'react'
const Button = (props) =>{
    const { type, text, className } = props;
    return (
    <button type = {props.type} className={className}> {props.text} </button> );
}
export default Button