import React from 'react'
const Button = (props) =>{
    const { type, text, className } = props;
    return (
    <button type = {props.type} className={className} onClick={props.onClick}> {props.text} </button> );
}
export default Button