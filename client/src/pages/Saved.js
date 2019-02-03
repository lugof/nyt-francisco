import React, {Component} from "react";
import API from "../utils/api"
import SavedList from "../components/SavedList/SavedList"
import HeaderSaved from "../components/HeaderSaved/HeaderSaved";

class Saved extends Component{
state={
    books: []
}
    componentDidMount(){
        API.getBooks().then(results=> { this.setState({
            books: results.data
        })})
    }

    reloadBooks = () => {
        API.getBooks()
            .then(results => {
                this.setState({
                    books: results.data
                })
            })
    }



        render(){
            return(
                <div>
                    <HeaderSaved/>
                    <SavedList reloadbooks={this.state.books} books={this.state.books} /></div>
            )
        }



}

export default Saved;