import React from 'react';
import SearchSuggestions from './SearchSuggestions';
import SeasonDropDown from './SeasonDropDown';
import SeasonEpisodes from './SeasonEpisodes'
import logo from './TVShow.png';

class MainContainer extends React.Component {
  constructor(){
    super();
      this.state = {
      search: "", 
      shows: [],
      showSelectedId: "",
      showSelectedDesc: "",
      seasonEpisodes: "",
      seasonId: "", 
      seasonNumber: "",
      episodeDetails: ""
    }
  }


 handleChange = (event) =>  {
    this.setState({
      search: event.target.value
    }, () => 
    fetch(`http://api.tvmaze.com/search/shows?q=${this.state.search}`).then(resp => resp.json()).then( showSearchResp => this.setState({
      shows: showSearchResp
    })))
  }

  handleShowSelection = (event) => {
    if(event.target.parentElement.type === "Search-Suggestion"){
      let showId = event.target.parentElement.id;
      fetch(`http://api.tvmaze.com/shows/${showId}?embed=seasons`).then(resp => resp.json()).then( singleShowResp => this.setState({
      showSelectedDesc: singleShowResp.summary,
      showSelectedSeasons: singleShowResp._embedded.seasons,
      showSelectedId: showId,
      showSelectedName: singleShowResp.name,
      search: ""
    }, ()=> console.log(this.state)))
    }
  }


  handleSeasonSelection = (event) => {
    let seasonId = event.target.id; 
    let seasonNumber = event.target.number;
    fetch(`http://api.tvmaze.com/seasons/${seasonId}/episodes`).then(resp => resp.json()).then(seasonEpisodes => this.setState({
      seasonEpisodes: seasonEpisodes, 
      seasonId: seasonId,
      seasonNumber: seasonNumber
    }, ()=> console.log(this.state)))
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    let search = this.state.search;
    fetch(`http://api.tvmaze.com/search/shows?q=${search}`).then(resp => resp.json()).then( showSearchResp => this.setState({
      shows: showSearchResp
    }))
  }

  handleClear = (event) => {
    this.setState({
      search: "", 
      shows: [],
      showSelectedId: "",
      showSelectedDesc: "",
      seasonEpisodes: "",
      seasonId: "",
      seasonNumber: "",
      episodeDetails: ""
    })
  }

  handleEpisodeSelection = (event) => {
    let episodeNumber = event.target.number; 
    let seasonNumber = this.state.seasonNumber; 
    let showId = this.state.showSelectedId; 
    console.log(showId, seasonNumber, episodeNumber)
    fetch(`http://api.tvmaze.com/shows/${showId}/episodebynumber?season=${seasonNumber}&number=${episodeNumber}`).then(resp => resp.json()).then(episodeDetails => this.setState({
      episodeDetails: episodeDetails
    }))
  }

  
  render(){
    return(
    <div className="Search-section">
    <img src={logo} id="TV-Logo"/> 
      <p className="Lato">Search TV Show</p>
      <form  onSubmit={this.handleSubmit}>
        <input className="Lato" id="Search-Bar" type="text" placeholder="Please enter TV show title" name="search" onChange={this.handleChange}/>
      </form>
      <SearchSuggestions search={this.state.search} shows={this.state.shows} handleClear={this.handleClear} handleShowSelection={this.handleShowSelection}/>
      {!!this.state.showSelectedId ? <SeasonDropDown name={this.state.showSelectedName} showId={this.state.showSelectedId} handleSeasonSelection={this.handleSeasonSelection} showSelectedSeasons={this.state.showSelectedSeasons} showDescription={this.state.showSelectedDesc}/> : null }
      {!!this.state.seasonEpisodes ? <SeasonEpisodes episodeDetails={this.state.episodeDetails} handleEpisodeSelection={this.handleEpisodeSelection} seasonEpisodes={this.state.seasonEpisodes}/> : null }

    </div> 
    )
   
  }
}

export default MainContainer; 

