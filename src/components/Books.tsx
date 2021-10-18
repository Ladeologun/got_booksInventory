import {useState,useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import BookCard from "./BookCard"
import Loader from "./Loader"
import EndMsg from "./EndMsg"
import {fetchbooks} from '../services/Fetch'

export interface Istate{
    Books:{
        name:string
        isbn:string
        publisher:string
        country:string
        url:string
        released:string
        numberOfPages:number
        mediaType?:string
        povCharacters?:string[]
        characters:string[]
        authors:string[]
    }[]
}
interface Iprops{
    searchValue:string
    searchTag:string
}

const Book: React.FC<Iprops> = ({searchValue,searchTag})=> {
  const [Books,setBooks] = useState<Istate["Books"]>([])
  const [hasMore, sethasMore] = useState(true);
  const [page,setPage] = useState(2)
  const [pagesize] = useState(4)

  useEffect(()=>{
    const fetchdata = async()=>{
      const response= await fetchbooks(pagesize)
      if (searchValue && searchTag){
        const response = await fetchbooks(12)
        const data = response.data.filter((book: Record<string, string>)=>book[searchTag].toString().toLowerCase().includes(searchValue.toLowerCase()))
        setBooks(data)
        sethasMore(false)
      }else{
        setBooks(response.data)
        sethasMore(true)
        setPage(2)
      }  
    }
    fetchdata()
  },[searchValue,searchTag])
  
  const fetchData = async () => {
    const response = await fetchbooks(pagesize,page)
    setBooks([...Books, ...response.data]);
    if (response.data.length === 0 || response.data.length < pagesize) {
      sethasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={Books.length} 
      next={fetchData}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<EndMsg />}
    >
      <div className="container">
        <div className="row m-2">
          {Books.map((book,index)=>{
                const cleanedDate = new Date(book.released).toDateString();
                const authors = book.authors.join(", ");
                return <BookCard key={index} 
                            index={index} 
                            authors={authors}
                            pub = {book.publisher}
                            isbn = {book.isbn}
                            name = {book.name}
                            numpages ={book.numberOfPages}
                            country ={book.country}
                            date = {cleanedDate}
                        />
            })}
        </div>
      </div>
    </InfiniteScroll>
  );

}

export default Book;

