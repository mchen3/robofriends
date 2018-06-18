import React from 'react';
import Card from "./Card"

const Cardlist = ({robots}) => {
  if(true) {
    //throw new Error('No');
  }


  return (
    <div>   
      {
        robots.map(robot => 
          <Card 
            key = {robot.id} 
            id = {robot.id} 
            name = {robots.name} 
            email = {robot.email}
          />
        )
      }
    </div>
  );
}

export default Cardlist;