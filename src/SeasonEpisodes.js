import React from 'react';


class SeasonEpisodes extends React.Component{
  constructor(props){
    super(props); 
  }

  componentDidUpdate(){
    let episodesLine = document.getElementById("Episodes-TimeLine");
    let episodes = this.props.seasonEpisodes; 
    episodesLine.innerHTML = "";
    for(let i = 0; i < episodes.length; i++){
      let newLi = document.createElement("li");
      newLi.innerHTML = `Episode ${i+1}`;
      newLi.id = episodes[i].id;
      newLi.number = `${i+1}`;
      episodesLine.appendChild(newLi)
    }
  }

  componentDidMount(){
    let episodesLine = document.getElementById("Episodes-TimeLine");
    let episodes = this.props.seasonEpisodes; 
    episodesLine.innerHTML = "";
    for(let i = 0; i < episodes.length; i++){
      let newLi = document.createElement("li");
      newLi.innerHTML = `Episode ${i+1}`;  
      newLi.id = episodes[i].id;
      newLi.number = `${i+1}`;
      episodesLine.appendChild(newLi)
    }
  }

render(){ 
  
  console.log(this.props.episodeDetails)
  return (
    <div className="timeline-container"> 
    {!!this.props.episodeDetails ?  
    <div id="Episode-Details"> 
    
    <img id="Episode-Img" src={!!this.props.episodeDetails.image ? this.props.episodeDetails.image.original : null} alt="no image" /> 
   
    <p id="Episode-Summary">  <p id="Episode-Title">  {this.props.episodeDetails.name} </p>   {this.props.episodeDetails.summary.replace(/(<([^>]+)>)/ig,"")}</p> 
    </div>
     : 
      null  }
      <div className="timeline">
      <ol id="Episodes-TimeLine" onClick={this.props.handleEpisodeSelection}>
      
      </ol>
      </div>
    </div> 
  )
  }
}

export default SeasonEpisodes;
