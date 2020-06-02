import React from 'react'
import SingleInput from "../genericInputs/singleInput"
import DynamicInputs from "../genericInputs/dynamicInputs"
import DietaryPreferencesInput from "../dietaryPreferencesInput"
import EquipmentIcons from "../equipment/equipmentIcons"
import UserProfile from "../userProfile"
import RatingIcons from "./ratingIcons"
import Alert from "../alert"

class UploadForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            ingredients:[],
            steps:[],
            equipment:{"grater":0, "grill":0, "microwave":0,"mixer":0,"pan":0,"pot":0,"stove":0,"toaster":0},
            user_id:UserProfile.getName(),
            errors:[],
            missing:[],
            vegan:false,
            "gluten-free":false,
            vegetarian:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.openRecipePage = this.openRecipePage.bind(this);
        this.convertIngredientToString = this.convertIngredientToString.bind(this);
        this.extractIngredients = this.extractIngredients.bind(this)
        this.extractNutritionalInfo = this.extractNutritionalInfo.bind(this)
        this.collectInfo = this.collectInfo.bind(this)
        this.validateForm = this.validateForm.bind(this)

    }

    handleComponentChange(nameOfField, valueOfField)
    {
        this.setState({ [nameOfField]:valueOfField},()=>console.log(this.state));
    }


    handleChange(event)
    {
        console.log(this.state)
        //dWfgEUED0f1JYAo0swEZ4GLUlrOtUBPoqlBh1MpC
    }

    openRecipePage(id)
    {
        const win = window.open("/recipe/"+id);
        if (win !== null) {
            win.focus();
        }
    }

    convertIngredientToString(ingredient)
    {
        const {amount, name, unit} = ingredient;
        return `${amount} ${unit} ${name}, `;
    }

    extractIngredients()
    {
        let result = "";
        this.state.ingredients.forEach((ingredient) => {
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
        this.setState({"nutrientInfo":[
            {"name":"Calories", "value":calories},
            {"name":"Fat", "value":fat.toPrecision(2)},
            {"name":"Sugar", "value":sugar},
            {"name":"Salt", "value":sodium},
            {"name":"Protein", "value":protein}
        ]});


    }

    async collectInfo()
    {
        const ingredientList = this.extractIngredients();
        const data = { query: ingredientList };

        let promise = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            'x-app-id':' d0d94ea0',
            'x-app-key':'c5e02317496f34f27f0ab52d6b132ebb',
            'x-remote-user-id':'0'
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          this.extractNutritionalInfo(data);
        })
        .catch((error) => {
          console.error('Error:', error);
          //no!
          this.setState({"nutrientInfo":[
              {"name":"Calories", "value":100},
              {"name":"Fat", "value":25},
              {"name":"Sugar", "value":0.8},
              {"name":"Salt", "value":12},
              {"name":"Protein", "value":6}
          ]});
        });
        return promise;
    }


    validateForm()
    {
        let newErrors = [];
        let required = ["name", "photo", "ingredients", "time", "difficulty", "price"];
        required.forEach((field)=>{
            if (!(field in this.state) || this.state[field].length === 0)
            {
                newErrors.push("Fill out "+field+". ");
            }
        });
        this.setState({"errors":newErrors});
    }

    handleSubmit(e)
    {
        e.preventDefault();
        this.validateForm()
        if (this.state.errors.length!==0)
        {
            return;
        }
        this.collectInfo()
        .then(()=>{
                fetch('https://cook-me.herokuapp.com/upload', {
                  method: 'POST',// or 'PUT'
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(this.state),
                })
                .then((response) => response.json())
                .then((data) => {
                  this.openRecipePage(data.id);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            }
        )
;

    }

    render()
    {

        return(
            <div className="d-flex flex-column text-center m-2">
            <p className="h4 my-5">Tell us about your recipe!</p>
            <div className="row mx-3">
                <SingleInput className="col-lg" required="true" name="name" handler={this.handleComponentChange}/>
                <SingleInput name="photo" className="col-lg" handler={this.handleComponentChange}/>
            </div>
            <hr />
            <DynamicInputs name="ingredients" handler={this.handleComponentChange}/>
            <div className="row mt-3 justify-content-center">
                <DietaryPreferencesInput name="preferences" handler={this.handleComponentChange}/>
            </div>
            <hr />
            <DynamicInputs name="steps" handler={this.handleComponentChange}/>
            <div className="row mt-3 justify-content-center align-items-center">
                <EquipmentIcons name="equipment" handler={this.handleComponentChange} preloaded="false" />
            </div>

            <div className="row mt-3 justify-content-center align-items-center">
                <RatingIcons name="difficulty" handler={this.handleComponentChange}/>
            </div>
            <div className="row mt-3 justify-content-center align-items-center">
                <RatingIcons name="time" handler={this.handleComponentChange}/>
            </div>
            <div className="row mt-3 justify-content-center align-items-center">
                <RatingIcons name="price" handler={this.handleComponentChange}/>
            </div>
            <Alert errors={this.state.errors} />


            <button type="submit" className="btn btn-info btn-block my-4" onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
 }

export default UploadForm;
