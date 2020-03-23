import React from 'react'
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = (props) => {
    const navItems = [
        {label:"Burger Builder" , route:"/" ,isActive:true},
        {label:"Checkout" , route:"/" , isActive:false},
    ]
    const navItemsShow = navItems.map((navItem,i)=>
        <NavigationItem 
            key={navItem.label+i} 
            route={navItem.route}
            active={navItem.isActive}
        >
            {navItem.label}
        </NavigationItem>
    );
    return (
        <div className={classes.navigationitems}>
            {navItemsShow}
        </div>
    )
}

export default NavigationItems
