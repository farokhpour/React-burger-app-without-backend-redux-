import React , {useRef}from 'react'
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
const Burger = (props) => {
    const burger_container = useRef();
    let container_style = {
        marginBottom: 15,
        maxHeight: 400,
        overflowY:"auto",
        display:"inline-block",
        padding:"15px"
    }   
    const burger = Object.keys(props.ingridients).map(IgKey=>(
        [...Array(props.ingridients[IgKey])].map((_,i)=>
        <BurgerIngridient key={IgKey+i} type={IgKey} />
        )
    )).reduce((initialArray,element)=>
        initialArray.concat(element) 
    ,[] )
    return (
        <div>
            <p>{props.totalCost.toFixed(2)}$</p>
            {
                <div 
                    style={container_style}
                    ref={burger_container}
                >
                    <BurgerIngridient type="topBread" />
                        {
                            burger.length ? 
                            burger : 
                            <p style={{fontWeight:"bold"}}>please start adding ingridients</p>
                        }
                    <BurgerIngridient type="bottomBread" />
                </div>
            }
        </div>
      
    )
}
export default Burger
