import React from 'react';
// We learned about props, states, but not chldren. Since "Scroll" is a 
// wrapper we need to pass through it children

const Scroll = (props) => {
    return (
        // Within style, the first layer is javascript and the second layer
        // is CSS
        <div style = {{overflow: 'scroll', border: '5px solid black', height: '900px'}}>
            {props.children};
        </div>
    );
}

export default Scroll;








