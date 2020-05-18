import React from 'react';


class SeasonDropDown extends React.Component{
  constructor(props){
    super(props); 
  }

  componentDidUpdate(){
    let table = document.getElementById("Seasons");
    let seasons = this.props.showSelectedSeasons; 
    table.innerHTML = "";
    for(let i = 0; i < seasons.length; i++){
      let newRow = table.insertRow();

      let seasonCell = newRow.insertCell(0);
      seasonCell.innerHTML = `Season ${i+1}`;
      seasonCell.id = seasons[i].id;
      seasonCell.number = `${i+1}`;
    }  
  }

  componentDidMount(){
    let table = document.getElementById("Seasons");
    let seasons = this.props.showSelectedSeasons; 
    table.innerHTML = "";
    for(let i = 0; i < seasons.length; i++){
      let newRow = table.insertRow();

      let seasonCell = newRow.insertCell(0);
      seasonCell.innerHTML = `Season ${i+1}`;
      seasonCell.id = seasons[i].id;
      seasonCell.number = `${i+1}`;
    }  
  }


  
 
render(){
  let showDescriptonWithoutTags = this.props.showDescription.replace(/(<([^>]+)>)/ig,"");
  return (
    <div id="Show-Details" > 
    <h2> {this.props.name} </h2> 
    <p>{showDescriptonWithoutTags} </p> 
    <label> Seasons </label>
    <div className="Show-Seasons" onClick={this.props.handleSeasonSelection}> 
    <table className="Show-Seasons">
        <tbody id="Seasons" className="Show-Seasons">
        
        </tbody>
      </table>
      </div> 
  </div>  
  )
  }
}

export default SeasonDropDown;
