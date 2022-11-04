import React from 'react'
import { Link } from "react-router-dom";
import './button.css';
import { button } from "../type"

const Button: React.FC<button> = ({ link, text }) => {
  return <p className="button"><Link to={ link }>{ text }</Link></p>
}
  
export default Button;