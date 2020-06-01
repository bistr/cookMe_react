import React from 'react'

class NutritionalInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }


    render()
    {
        console.log(this.props)
        if (this.props.info===null || this.props.info.length === 0)
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
                  {["Calories", "Salt", "Fat", "Sugar", "Protein"].map((nutrient) => (
                      <tr>
                        <th scope="row">{nutrient}</th>
                        <td>{this.props.info[nutrient]}</td>
                      </tr>
                  ))}
                  </tbody>
                  </table>
            </div>
        )
    }

};

export default NutritionalInfo
