import axios from "axios";
import React, { useEffect, useState } from "react"
import SearchTable from './SearchTable'

function FilterTable() {
    const [post, setPost] = useState([])
    const [query, setQuery] = useState("");
    const readUrl = "http://localhost/React/pcshop/src/php/read.php";
    useEffect(() => {
        axios.get(readUrl).then((response) => {
            setPost(response.data)
        });
    }, [])

    const search = (data) => {
        
        return data.filter((item) => item.naziv.toLowerCase().includes(query))
    }
    console.log(post.constructor === Array)
      return (
        <div>
            <input 
                type='text'
                placeholder="Search..."
                className="search"
                onChange={(e) => setQuery(e.target.value)}
                />
            <SearchTable data={search(post)} />
        </div>
    )
}

export default FilterTable
