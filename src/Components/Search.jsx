import React, { useState } from 'react'

const Search = ({ onSearch }) => {

    const [input, setInput] = useState("")

    const handleSearch = () => {
        if (input.trim() !== "") {
            onSearch(input)
        }
    };



    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h2 className='text-center mb-3'>
                        Book Store
                    </h2>
                    <div className='d-flex justify-content-center gap-3'>
                        <input
                            type='text'
                            className='form-control w-50'
                            placeholder='Search your Book...'
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button className='btn btn-primary' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search