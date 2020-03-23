import React from 'react'
import classes from "./BurgerIngridient.module.css";
const BurgerIngridient = (props) => {
    let ingridient = null;
    switch (props.type) {
        case "topBread":
            ingridient = <div className={classes.topBread}></div>
            break;
        case "bottomBread":
            ingridient = <div className={classes.bottomBread}></div>
            break;
        case "meat":
            ingridient = <div className={classes.meat}></div>
            break;
        case "cheese":
            ingridient = <div className={classes.cheese}></div>
            break;
        case "bacon":
            ingridient = <div className={classes.bacon}></div>
            break;
        case "salad":
            ingridient = <div className={classes.salad}></div>
            break;
        case "tomato":
            ingridient = <div className={classes.tomatoWrraper}>
                            <div className={classes.tomato}></div>
                            <div className={classes.tomato}></div>
                        </div>
            break;
        default:
            ingridient =null
            break;
    }
    return ingridient;
}
export default BurgerIngridient
