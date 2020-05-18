import React from 'react';


class SearchSuggestions extends React.Component {
  constructor(props){
    super(props); 
  }

  componentDidUpdate(){
    let table = document.getElementsByTagName("tbody")[0] 
    table.innerHTML = "";

    if(!!this.props.search){
    for(let i = 0; i < this.props.shows.length; i++){
      let newRow = table.insertRow();
      newRow.id = this.props.shows[i].show.id;
      newRow.type = "Search-Suggestion";

      let showNameCell = newRow.insertCell(0);
      let showDateCell = newRow.insertCell(1);
      let showRatingCell = newRow.insertCell(2);
      showRatingCell.className = "Show-Rating-Cell";

      let showName =  this.props.shows[i].show.name; 
      let premieredDate = this.props.shows[i].show.premiered; 
      let score = this.props.shows[i].score;
      score = Math.round(score * 10)/10
      let year,month,day,date; 

      if(premieredDate !== null){
         year = premieredDate.split("-")[0];
         //decemeber is month 11 in JS, starting with 0 for January. 
         month = premieredDate.split("-")[1] - 1;
         day = premieredDate.split("-")[2];
         date = new Date(year, month, day);
         date = date.toDateString();
      }

      showNameCell.innerHTML = showName;
      showDateCell.innerHTML = ` Premiered on ${date}`;
      showRatingCell.innerHTML = `Rating:  ${score}`;
      } 
    }
  }

  render(){
    return (
    <div className="Search-Bar-Div" > 
    <button id="Clear-Button" onClick={this.props.handleClear}> <p className="Lato"> Clear </p></button> 
      <div className="Search-Suggestions" onClick={this.props.handleShowSelection}> 
      <table className="Search-Suggestions">
        <tbody className="Search-Suggestions">
        
        </tbody>
      </table>
      </div> 
    </div> 
  )}
}

export default SearchSuggestions;
