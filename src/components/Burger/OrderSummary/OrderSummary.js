import React from 'react'
const OrderSummary = (props) => {
    const ingridients = Object.keys(props.ingridients).map(ingKey=>{
        if(props.ingridients[ingKey]){
            return <li key={ingKey}>{`${ingKey}: ${props.ingridients[ingKey]}`}</li>
        }
        else {
            return null
        }
    }).filter(el=> el !== null);
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A Burger With Following Ingridients</p>
            {ingridients.length ? <ul> {ingridients}</ul>: null}
 
        </React.Fragment>
    )
}

export default OrderSummary
