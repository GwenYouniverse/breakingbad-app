import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
           
        }} className="py-3">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" style={{ backgroundColor: 'green'}}>
                        <Link to='characters' onClick={() => paginate(number)} className="page-link">{number}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
