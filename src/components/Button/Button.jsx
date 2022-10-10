import React from 'react'
import { Link } from "react-router-dom";
import './Button.css'

const Button = ({url, title}) => {
    return (
        <div className="button__wrapper">
          <Link to={url}>
            <button>{title} </button>
          </Link>
        </div>
      );
}

export default Button