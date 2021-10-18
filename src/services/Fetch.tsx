import axios, { AxiosResponse } from "axios"
import {Istate} from '../components/Books'

interface Iprops{
    books:Istate
}

export const fetchbooks = async(pagesize:number,page=1)=>{
    const response:AxiosResponse<any>= await axios.get(
        `https://www.anapioficeandfire.com/api/books?page=${page}&pageSize=${pagesize}`
      )
    return response
}
