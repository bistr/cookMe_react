import React from 'react'
import GenericForm from "./genericForm"
import SingleInput from "./genericInputs/singleInput"
import DynamicInputs from "./genericInputs/dynamicInputs"
import DietaryPreferencesInput from "./dietaryPreferencesInput"
import EquipmentIcons from "./equipment/equipmentIcons"
import UserProfile from "./userProfile"
import RatingIcons from "./recipes/ratingIcons"
import Utilities from "./utilities"


class UploadForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.extractIngredients = this.extractIngredients.bind(this);
        this.extractNutritionalInfo = this.extractNutritionalInfo.bind(this);

        this.state =  {"nutrientInfo":[
                    {"name":"Calories", "value":0},
                    {"name":"Fat", "value":0},
                    {"name":"Sugar", "value":0},
                    {"name":"Salt", "value":0},
                    {"name":"Protein", "value":0}
                ]};

    }


    convertIngredientToString(ingredient)
    {
        const {amount, name, unit} = ingredient;
        return `${amount} ${unit} ${name}, `;
    }

    extractIngredients(data)
    {
        let result = "";
        data.ingredients.forEach((ingredient) => {
            result=result.concat(this.convertIngredientToString(ingredient))
        });
        console.log(result)
        return result;
    }

    extractNutritionalInfo(data)
    {
        const {foods} = data;
        let calories = 0;
        let fat = 0;
        let sodium = 0;
        let sugar = 0;
        let protein = 0;
        //that might use a "reduce"
        foods.forEach((food) => {
            calories+=food.nf_calories;
            fat+=food.nf_total_fat;
            sodium+=food.nf_sodium/1000;
            sugar+=food.nf_sugars;
            protein+=food.nf_protein;
        });
        return [
            {"name":"Calories", "value":calories},
            {"name":"Fat", "value":fat.toPrecision(2)},
            {"name":"Sugar", "value":sugar},
            {"name":"Salt", "value":sodium},
            {"name":"Protein", "value":protein}
        ];
    }

    submitHandler(formInfo)
    {
        console.log(formInfo);
        const ingredientList = this.extractIngredients(formInfo);
        const data = { query: ingredientList };
        Utilities.sendRequestPost('https://trackapi.nutritionix.com/v2/natural/nutrients', data)
        .then((data)=>this.extractNutritionalInfo(data))
        .then((data)=> {formInfo.nutrientInfo = data; return formInfo})
        .then((data)=> Utilities.sendRequestPost("https://cook-me.herokuapp.com/upload", data))
        .then((data) =>  window.open("/recipe/"+data.id))
        .catch((error) => {
          console.error('Error:', error);
        });

    }



    render()
    {
        return (
            <GenericForm required={["name", "photo", "ingredients", "steps", "time", "difficulty", "price"]} handler={this.submitHandler}>
                <SingleInput name="name"/>
                <SingleInput name="photo"/>
                <hr />
                <DynamicInputs name="ingredients"/>
                <DietaryPreferencesInput name="preferences"/>
                <hr />
                <DynamicInputs name="steps"/>
                <EquipmentIcons name="equipment" preloaded="false"/>
                <RatingIcons name="difficulty"/>
                <RatingIcons name="time"/>
                <RatingIcons name="price"/>

            </GenericForm>

        )
    }

}

export default UploadForm;
