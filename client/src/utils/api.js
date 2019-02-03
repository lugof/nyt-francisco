import axios from "axios";
const apiKey = "AIzaSyB_1xEW-SARUv801bA0uiiozdtcbLcXf54";

export default {
   getGoogleBooks: function(book) {
       return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`);
     },

     saveBook: function(book){
       console.log("we are requesting the savebook function");
       return axios.post("/api/books", book);
     },

     deleteBook: function(id){
       return axios.delete("/api/books/"+id)
     },

     getBooks: function(){
       return axios.get("api/books")
     },

}









//data.items[0].volumeInfo.authors                autor
//data.items[0].volumeInfo.imageLinks.smallThumbnail        imagen
////data.items[0].volumeInfo.description      descripcion
////data.items[0].volumeInfo.infoLink         infolink
//data.items[0].volumeInfo.