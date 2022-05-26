import React from "react";
import FooterClearBtn from "../footer-clear-btn/footer-clear-btn";
import FooterCountTodo from "../footer-count-todo/footer-count-todo";
import FooterListBtnFilter from "../footer-list-btn-filters/footer-list-btn-filters";
import './footer.css';



const Footer = ({ toDo, onClearCompleteItem, toDoStatusFilter }) => {
    return (
        <footer className="footer">
            <FooterCountTodo  toDo={toDo}/>
            <FooterListBtnFilter 
                toDoStatusFilter={ toDoStatusFilter }/>
            <FooterClearBtn onClearCompleteItem={ () => onClearCompleteItem() }/>
        </footer>
    );
};

export default Footer;