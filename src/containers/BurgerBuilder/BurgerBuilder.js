import React, { Component } from 'react'
import Burger from "../../components/Burger/Burger";
import classes from "./BurgerBuilder.module.css";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import Modal from "../../UI/Modal/Modal";
import BuildControls from "../../components/BuildControls/BuildControls";
import Button from "../../UI/Button/Button"
import Backdrop from "../../UI/Backdrop/Backdrop";
const INGRIDIENT_PRICE={
    tomato:0.2,
    salad:0.5,
    meat:1.3,
    cheese:0.4,
    bacon:0.7,
}
export class BurgerBuilder extends Component {

    state = {
        ingridients:{
            tomato:0,
            salad:0,
            bacon:0,       
            cheese:0,
            meat:0,
        },
        totalPrice:4,
        disablePurchase:true,
        purchasing : false
    }
    ingridientControl = (type,action)=>{
        switch (action) {
            case "add":
                this.setState( prevState =>{
                    const updatedIngridient = {
                        ...prevState.ingridients
                    }
                    updatedIngridient[type] = updatedIngridient[type] + 1 ;
                    const totalIngridentsCount = this.updatePurchase(updatedIngridient);
                    return {
                        ingridients:{
                            ...updatedIngridient
                        },
                        totalPrice : (INGRIDIENT_PRICE[type]*10 + prevState.totalPrice*10)/10,
                        disablePurchase:totalIngridentsCount === 0 
                    }
                });
                break;
                case "minus":
                    this.setState( prevState => {
                        const updatedIngridient = {
                            ...prevState.ingridients
                        }
                        updatedIngridient[type] = updatedIngridient[type] >0 ? updatedIngridient[type] - 1 :0;
                        const totalIngridentsCount = this.updatePurchase(updatedIngridient);
                        return{
                            ingridients:{
                                ...updatedIngridient
                            },
                            totalPrice:prevState.totalPrice>4 ? 
                                        (prevState.totalPrice*10 - INGRIDIENT_PRICE[type]*10)/10 :
                                        4,
                            disablePurchase:totalIngridentsCount === 0 
                        }
                    });
                    break;
            default:
                this.setState( prevState =>{
                    const updatedIngridient = {
                        ...prevState.ingridients
                    }
                    updatedIngridient[type] = 0;
                    const totalIngridentsCount = this.updatePurchase(updatedIngridient);
                    return{
                        ingridients:{
                            ...updatedIngridient
                        },
                        totalPrice:prevState.totalPrice>4 ?
                                    ((prevState.totalPrice*10) - 
                                        ((INGRIDIENT_PRICE[type]*prevState.ingridients[type])*10)
                                    )/10 :
                                    4,
                        disablePurchase:totalIngridentsCount === 0
                    }
                });
                break;
        }
    }  
    purchaseHandler = (type)=>{
        if(type ==="modal")
            this.setState({purchasing:true})
        else   
            this.setState({purchasing:false})
    }
    updatePurchase = (ingridients) =>{
        return Object.values(ingridients).reduce((sum,ingValue)=>sum+ingValue,0);
    } 
    purchaseContinueHandler = ()=>{
        alert("you continued");
        this.setState({purchasing:false})
    }
    render() {
        const disableInfoAdd = { 
            ...this.state.ingridients
        };
        const disableInfoDelete = { 
            ...this.state.ingridients
        };
        for(let key in disableInfoAdd){
            disableInfoAdd[key] = disableInfoAdd[key] >= 3
        }
        for(let key in disableInfoDelete){
            disableInfoDelete[key] = disableInfoDelete[key] === 0
        }
        return (
            <div className={classes.burgerBuilderContainer}>
                <BuildControls 
                    ingridients={this.state.ingridients} 
                    ingridientControl={this.ingridientControl}
                    disableInfoAdd = {disableInfoAdd}
                    disableInfoDelete = {disableInfoDelete}
                    disabledPurchase={this.state.disablePurchase}
                    purchaseHandler={this.purchaseHandler}
                />
                <Burger 
                    ingridients={this.state.ingridients}
                    totalCost={this.state.totalPrice}
                />
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingridients={this.state.ingridients}/>
                    <p>Continue Checkout? {this.state.totalPrice.toFixed(2)}$</p>
                    <Button btnType="success" click={this.purchaseContinueHandler}>Continue</Button>
                    <Button btnType="danger" click={this.purchaseHandler}>Cancel</Button>
                </Modal>
                <Backdrop 
                    show={this.state.purchasing}
                    click={this.purchaseHandler}            
                    />
            </div>
        )
    }
}

export default BurgerBuilder
