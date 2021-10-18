import React from "react"

interface Iprops{
    index:number
    name:string
    authors:string
    numpages:number
    country:string
    date:string
    pub:string
    isbn:string
}



const BookCard:React.FC<Iprops>=({index,authors,name,numpages,country,date,pub,isbn})=>{

    return(
        <>
            <div className="book" >
                <h3>Book {index+1}</h3>
                <h2><strong>{name}</strong></h2>
                <div className="details">
                  <p>Author: {authors} </p>
                  <p>{pub}</p>
                  <p>{numpages} pages</p>
                  <p>ISBN:{isbn}</p>
                  <p>🏘{country}</p>
                  <p>{date}</p>
                </div>
            </div>  
        </>
    )
}
export default BookCard