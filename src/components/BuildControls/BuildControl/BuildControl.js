import React from 'react'
import classes from "./BuildControl.module.css";
const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div> 
                <span>{props.type} </span>
                <span className={classes.count}>{props.count}</span>
            </div>
            <div>
                <button 
                    className={`${classes.btn} ${classes.btnAdd}`}
                    onClick={()=>props.control(props.type , "add")}
                    disabled={props.disabledAdd}
                >
                    <i className="fa fa-plus"></i>
                </button>
                <button 
                    className={`${classes.btn} ${classes.btnMinus}`}
                    onClick={()=>props.control(props.type , "minus")}
                    disabled={props.disabledDelete}
                >
                    <i className="fa fa-minus"></i>
                </button>
                <button 
                    className={`${classes.btn} ${classes.btnTrash}`}
                    onClick={()=>props.control(props.type , "trash")}
                    disabled={props.disabledDelete}
                >
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default BuildControl
