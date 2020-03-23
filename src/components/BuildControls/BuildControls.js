import React from 'react'
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl"
const BuildControls = (props) => {
    const controls = Object.keys(props.ingridients).map((ingKey,i)=>(
        <BuildControl 
            key={ingKey+i}
            type={ingKey} 
            count={
                props.ingridients[ingKey] !==0 ?
                    props.ingridients[ingKey]:
                    null
                }
            control={props.ingridientControl}
            disabledAdd = {props.disableInfoAdd[ingKey]}
            disabledDelete = {props.disableInfoDelete[ingKey]}
        />            
    ))
    return (
        <div className={classes.BuildControlsContainer}>
            <h4>Burger Builder</h4>
            {controls}
            <button 
                className={classes.OrderButton} 
                disabled={props.disabledPurchase}
                onClick={()=>props.purchaseHandler('modal')}
            >
                Order Now!
            </button>
        </div>
    )
}
export default BuildControls;
