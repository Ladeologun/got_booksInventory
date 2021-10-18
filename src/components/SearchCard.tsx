import React, { useState } from "react"

interface Iprops{
    handleSubmit(input:string, tag:string):void
}

const SearchCard: React.FC<Iprops> = ({handleSubmit})=> {
    const [searchValue, setSearchValue] = useState("")
    const [searchTag, setSearchTag] = useState("")
  
    const handleFormSubmit = (e: React.SyntheticEvent):void =>  {
        e.preventDefault()
        handleSubmit(searchValue, searchTag)
    }
    return (
        <>
            <h3 className="searchby">Search Books By</h3>
            <form id="searchForm" name="searchForm" onSubmit={handleFormSubmit}>
                <input className="text" type="text" name="searchTerm" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Publisher, Authors, ISBN, Characters Name" />
                <div className="searchcon">
                <label htmlFor="searchType">Search By:</label>
                <select name="searchType" id="searchType" value={searchTag} onChange={(e) => setSearchTag(e.target.value)}>
                    <option value="">Search by</option>
                    <option value="publisher">Publisher</option>
                    <option value="name">Name</option>
                    <option value="isbn">ISBN</option>
                    <option value="authors">Authors</option>
                    <option value="released">End Date</option>
                </select>
                </div>
                <input className="submit" type="submit" value="Search" onSubmit={handleFormSubmit} />
            </form>
        </>
    )
}
export default SearchCard;