/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

const lists = ["All","Live","Gaming","Songs","Soccer","Cricket","Valentines","Cooking","News","podcast","Music","Comedy-club","New To You", "Recently Uploaded","Jukebox","History"];

const ButtonList = () => {
  return (
    <div className="flex space-x-2">
      {lists.map( (name , index)  => (<Button key ={index} name ={name}/>  ))}
    </div>
  );
};

export default ButtonList;
