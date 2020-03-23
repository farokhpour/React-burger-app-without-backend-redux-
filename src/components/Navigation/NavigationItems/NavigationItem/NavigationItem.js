import React from 'react'
import classes from "./NavigationItem.module.css"
const NavigationItem = (props) => {
    const active = props.active ? classes.active : null;
    return (
        <a href={props.route} className={classes.navitem + " " + active}>
            {props.children}
        </a>
    )
}

export default NavigationItem
