import React from 'react';
// You'll notice that within the parameters we are using what we call 
// destructuring in javascript. Essentially, we are just receiving props,
// then were are destructuring the props right inside of those curly brakcets
const Card = ({name, email, id}) => {
    return(
        // You can only return on element, which is the div element
        // You cannot return a title, say an h1 tag outside of the div
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;