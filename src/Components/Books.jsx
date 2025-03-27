import React, { useEffect, useState } from 'react'
import axios from "axios"
const Books = ({ query }) => {
    const [books, setBooks] = useState([]);
    const key = import.meta.env.VITE_API_KEY
    useEffect(() => {
        if (!query) return;
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`)
            .then((result) => setBooks(result.data.items || []))
            .catch((err) => console.log("Error fetching books", err));
    }, [query]);


    return (
        <>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                {books.length > 0 ? (
                    books.map((book, index) => {
                        const volumeInfo = book.volumeInfo;
                        return (
                            <div className="col mb-3" key={index}>
                                <div className="card h-100">
                                    <img
                                        src={volumeInfo.imageLinks?.thumbnail || "https://placehold.co/200x300"}
                                        className="card-img-top"
                                        alt={volumeInfo.title}
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{volumeInfo.title}</h5>
                                        <p className="card-text">
                                            {volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown Author"}
                                        </p>
                                    </div>
                                    <div className='card-footer bg-transparent'>
                                        <a href={volumeInfo.infoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                            More Info
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h3 className='text-center'>Loading books...</h3>
                )}

            </div>
        </>
    )
}

export default Books