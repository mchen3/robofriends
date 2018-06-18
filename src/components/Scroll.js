import React from 'react';

const Scroll = (props) => {
  // console.log(props);
  // double brackets,outer bracket is javascript expression
  // inner returns a object that is CSS styles

    return (
      <div style={{ overflowY: 'scroll', 
                    border: '5px solid black', 
                    height: '500px '}}>
      {props.children}
     </div>
    );
};

export default Scroll;