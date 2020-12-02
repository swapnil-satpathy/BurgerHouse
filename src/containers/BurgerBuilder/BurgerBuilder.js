import React,{Component} from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES= {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}



class BurgerBuilder extends Component {
  state = {
    ingredients : {
      salad : 0,
      bacon : 0,
      cheese: 0,
      meat : 0,
    },
    totalPrice: 4,
    purchasable: false,
    ordernow: false
  }

  updatePurchaseState = (ingredients) =>{
    // const ingredients={...this.state.ingredients};
    const sum=Object.keys(ingredients).map((igkey) => {
      return ingredients[igkey]
    }).reduce((sum,el) => {
      return sum+el;
    },0);
    this.setState({
      purchasable:(sum>0)
    })
  }
  addIngredientHandler=(type) => {
    const oldCount=this.state.ingredients[type];
    const updatedCount=oldCount+1;
    // State should be updated in a non-mutable way
    const updatedIngredients={...this.state.ingredients};
    updatedIngredients[type]=updatedCount;
    const priceAddition= INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const newPrice=oldPrice+priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchaseState(updatedIngredients);
  }
  removeIngredientHandler=(type) => {

    const oldCount=this.state.ingredients[type];
    if(oldCount<=0){
      return;
    }
    const updatedCount=oldCount-1;
    // State should be updated in a non-mutable way
    const updatedIngredients={...this.state.ingredients};
    updatedIngredients[type]=updatedCount;
    const priceDeduction= INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const newPrice=oldPrice-priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchaseState(updatedIngredients);
  }

  ordernowHandler= () => {
    this.setState({ordernow: true});
  }

  purchaseCancelHandler=()=> {
    this.setState({ordernow: false});
  }
  purchaseContinueHandler=()=> {
    alert('Continue');
  }
  render(){
    const disableInfo={
      ...this.state.ingredients
    };
    for(let key in disableInfo){
      disableInfo[key]= disableInfo[key]<=0
    }

    return(
      <Aux>
      <Modal ordernow={this.state.ordernow}
      modalClosed={this.purchaseCancelHandler}>
      <OrderSummary
      ingredients={this.state.ingredients}
      totalPrice={this.state.totalPrice}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinue={this.purchaseContinueHandler}
      /></Modal>
      <Burger ingredients={this.state.ingredients}/>
      <BuildControls
      ingredientAdder={this.addIngredientHandler}
      ingredientRemover={this.removeIngredientHandler}
      disabled={disableInfo}
      price={this.state.totalPrice}
      purchasable={this.state.purchasable}
      ordernow={this.ordernowHandler}
      />
      </Aux>
    );
  }
}

export default BurgerBuilder;
