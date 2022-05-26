import React from "react";
import './footer-clear-btn.css';

const FooterClearBtn = (props) => {
    return (
        <button 
            className="clear-completed"
            onClick={ props.onClearCompleteItem }>Clear completed</button>
    );
};

export default FooterClearBtn;