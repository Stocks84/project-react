import React from "react";

// function FunctionalGreetingWithProps() {
//     return <h1>Hello from React!</h1>
// }
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello from Props!!! {props.greeting} {props.name}, {props.age}</h1>;
}

export default FunctionalGreetingWithProps;