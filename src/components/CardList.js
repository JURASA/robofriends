import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
           {
            // We are running a map function on robots array in order to return a new array.
            // Essentially, we take the values from the "robots" array and pass it through
            // "Card" where we return a single card with the given properties associated
            // to the specific index. Since this is a loop and function, it 
            // will return essentially a list of cards becuase it is iterating though 
            // the "robots" array
           robots.map((user,i) => {
                    // remember to always add a key to each element because if you don't,
                    // then when javascript deletes one card, it won't know which one you
                    // deleted, thus, having a key ensures each object is it's own "atom"
                    return (
                        <Card 
                            key={i} 
                            id ={robots[i].id} 
                            name={robots[i].name} 
                            email= {robots[i].email}
                        />
                    );
                })
           };
        </div>     
    );

}

export default CardList;










