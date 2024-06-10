import React from "react";

const Hello = (prop) => {
    return (
        <div>
            <p>{prop.children}</p> 
            <h1>Hello {prop.name}</h1>
        </div>
    )
    // return React.createElement("div", null, React.createElement("h1",{id: "h1"}, "Hello Shahid"));
};

export default Hello 

//  React.createElement take 3 arugments 1st element to be created, 2. object with attribute, 3. value (note I used again react.CreateElement).