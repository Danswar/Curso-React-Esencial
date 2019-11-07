import React, {Component, Fragment } from "react";
import Button from '@material-ui/core/Button';


class Dish extends Component{
    ingredients = ["Tortilla","Carne","Cebolla"];
    
    countIngridients(){
        return this.ingredients.length;
    }


    render(){
        return(
            <div className="dish">
                <h1>{ this.props.name }</h1>
                <h3>{this.countIngridients()}</h3>
                <Ingredient></Ingredient>
                <Button variant="contained">Default</Button>
            </div>   
        )
    }
}

export class Flag extends Component{
   

    render(){
        return(
            <div>
                <h1>Bandera</h1>
                
            </div>   
        )
    }
}

export class Ingredient extends Component{
    render(){
        return(
           <Fragment>
               <h4>Ingrediente</h4>
               <h4>Ingrediente</h4>
           </Fragment>
        )
    }
}

export default Dish;