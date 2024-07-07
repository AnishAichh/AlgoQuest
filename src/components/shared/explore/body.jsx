import React from 'react'
import Cards from './cards'


const Body = () => {
    return (
        <div>
            <div>
                <h2>Featured</h2>
                <Cards />
            </div>
            <div>
                <h2>Learn</h2>
                <Cards />
            </div>
            <div>
                <h2>Interview</h2>
                <Cards />
            </div>

        </div>
    )
}

export default Body
