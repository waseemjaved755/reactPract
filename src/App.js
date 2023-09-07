import React from  "react";
import Counter from "./components/Counter";


//so we have two types of components in React
//1.Functional 2.Class

//functional components
/*const App= ()=>
{

    return (
    <div>
     <h1>Hello this is Waseem </h1>
     <App2/>
    </div>
    );
      
}*/

//class components

//In classs compnents, Its something like React have React.Component and then it have render function 
//which actually gives us ability to render JSX onto the screen
//render is by-default name to use 
class App extends React.Component
{
    render()
    {
        return (
            <div>
         <Counter/>
            </div>
         
        );
    }
}


export default App;