import React from 'react';

const Card = ({id, name, email}) => {
// Can use destructuring, passing the parameters directly
// without using props variable, for cleaner code
// const Card = (props) => {
// const { name, email, username, id} = props;

  return(
    // Using tachyons css toolkit
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>{name} </h2>
        <p>{email}</p>
      </div>
      </div>

  ); 
}

export default Card;