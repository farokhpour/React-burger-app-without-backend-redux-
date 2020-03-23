import React from 'react'
import classes from "./Sidedrawer.module.css";
import NavigationItems from '../../NavigationItems/NavigationItems';
const Sidedrawer = (props) => {
    const classLists = [
        classes.sidedrawer,
        props.status?classes.open : classes.close
    ]
    return (
        <div className={classLists.join(" ")}>
            <button onClick={props.close}>close</button>
            <NavigationItems />
        </div>
    )
}

export default Sidedrawer
