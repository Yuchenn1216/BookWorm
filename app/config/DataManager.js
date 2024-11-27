import { createNavigatorFactory } from "@react-navigation/native";

export default class DataManager {
    static myInstance = null;
    userID = "";

    books = [
        {
            userid: "user1",
            bookid: 1,
            title: "Harry Potter",
            subtitle: "Read on 3rd of March,2000",
            image:require("../assets/bookcover1.jpeg"),
            category:"Fiction",
        },
        {
            userid: "user1",
            bookid: 2,
            title: "Game of Thrones",
            subtitle: "Read on 2rd of March,2000",
            image:require("../assets/GOTCover.jpeg"),
            category:"Fiction",
        },
        {
            userid: "user2",
            bookid: 2,
            title: "Game of Thrones",
            subtitle: "Read on 2rd of March,2000",
            image:require("../assets/bookcover1.jpeg"),
            category:"Fiction",
        },
    
    ]

    //when someone gonna create a object, if there's an existing object, the same object has to be given
    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance = new DataManager(); //otherwise create a new object 
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id; 
    }

    getBooks(id){
        return this.books.filter((book) => book.userid === id)
    }

    addBook(book){
        this.books.push(book);
    }

    


}