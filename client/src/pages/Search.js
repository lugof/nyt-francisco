import React, {Component} from "react";
import List from "../components/List/List"
import SearchBox from "../components/searchbox/searchbox"
import API from "../utils/api"

class Search extends Component {

    state={
        textSearch:"",
        books:[]
    }

handleSearchChange = (e)=>{
    this.setState({ textSearch: e.target.value})

}

handleSearchClick = (e)=>{
  //  e.preventDefault();
   API.getGoogleBooks(this.state.textSearch).then( (results,err )=> {
        this.setState({ books:results.data.items })   
    ; })
}
   render (){
        return (
            <div>
           <SearchBox textSearch={this.state.textSearch} handleSearchClick= {this.handleSearchClick} handleSearchChange={this.handleSearchChange}/>

            <List   books={this.state.books}              />
             </div>
        )
   }

}
export default Search;