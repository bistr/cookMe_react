import React from 'react'

class NutritionalInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
        // this.convertIngredientToString = this.convertIngredientToString.bind(this);
        // this.extractIngredients = this.extractIngredients.bind(this);
        // this.fetchInfo = this.fetchInfo.bind(this);
        // this.fetchInfo();


    }

    // convertIngredientToString(ingredient)
    // {
    //     const {amount, name, unit} = ingredient;
    //     return `${amount} ${unit} ${name}, `;
    // }
    //
    // extractIngredients()
    // {
    //     let result = "";
    //     this.props.ingredients.forEach((ingredient) => {
    //         result=result.concat(this.convertIngredientToString(ingredient))
    //     });
    //
    //     console.log(result)
    //     return result;
    // }
    //
    // extractNutritionalInfo(data)
    // {
    //     const {foods} = data;
    //     let calories = 0;
    //     let fat = 0;
    //     let sodium = 0;
    //     let sugar = 0;
    //     let protein = 0;
    //     //that might use a "reduce"
    //     foods.forEach((food) => {
    //         calories+=food.nf_calories;
    //         fat+=food.nf_total_fat;
    //         sodium+=food.nf_sodium/1000;
    //         sugar+=food.nf_sugars;
    //         protein+=food.nf_protein;
    //     });
    //     this.setState({"nutrientInfo":[
    //         {"name":"Calories", "value":calories},
    //         {"name":"Fat", "value":fat.toPrecision(2)},
    //         {"name":"Sugar", "value":sugar},
    //         {"name":"Salt", "value":sodium},
    //         {"name":"Protein", "value":protein}
    //     ]});
    //
    //
    // }
    //
    // fetchInfo()
    // {
    //     // this.setState({"nutrientInfo":[
    //     //       {"name":"Calories", "value":100},
    //     //       {"name":"Fat", "value":25},
    //     //       {"name":"Sugar", "value":0.8},
    //     //       {"name":"Salt", "value":12},
    //     //       {"name":"Protein", "value":6}
    //     //   ]});
    //
    //
    //
    //     // const ingredientList = this.extractIngredients();
    //     // const data = { query: ingredientList };
    //     //
    //     // fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    //     //   method: 'POST', // or 'PUT'
    //     //   headers: {
    //     //     'Content-Type': 'application/json',
    //     //     'x-app-id':' d0d94ea0',
    //     //     'x-app-key':'c5e02317496f34f27f0ab52d6b132ebb',
    //     //     'x-remote-user-id':'0'
    //     //   },
    //     //   body: JSON.stringify(data),
    //     // })
    //     // .then((response) => response.json())
    //     // .then((data) => {
    //     //   this.extractNutritionalInfo(data);
    //     // })
    //     // .catch((error) => {
    //     //   console.error('Error:', error);
    //     //   this.setState({"nutrientInfo":[
    //     //       {"name":"Calories", "value":100},
    //     //       {"name":"Fat", "value":25},
    //     //       {"name":"Sugar", "value":0.8},
    //     //       {"name":"Salt", "value":12},
    //     //       {"name":"Protein", "value":6}
    //     //   ]});
    //     // });
    //
    //
    // }

    render()
    {
        console.log(this.props)
        if (this.props.info==null || this.props.info.length == 0)
        {
            return null;
        }
        let classNameString = `table d-inline ${ this.props.className }`;


        return (
            
            <div className={classNameString}>
            <table className="w-100">
            <thead className="thead-dark w-100">
                <tr>
                    <th>Nutritional</th>
                    <th>Info</th>
                </tr>
            </thead>
                  <tbody className="w-100">
                  {this.props.info.map((nutrient) => (
                      <tr>
                        <th scope="row">{nutrient.name}</th>
                        <td>{nutrient.value}</td>
                      </tr>
                  ))}
                  </tbody>
                  </table>
            </div>
        )
    }

};

export default NutritionalInfo
