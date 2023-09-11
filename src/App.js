import React from 'react';
//import axios from "axios";
//import Counter from "./components/Counter";
import LoginForm from './components/LoginForm';


//so we have two types of components in React
//1.Functional 2.Class

//functional components
const App= ()=>
{

    return (
    <div>
     <LoginForm/>
    </div>
    );
      
}

//class components

//In classs compnents, Its something like React have React.Component and then it have render function 
//which actually gives us ability to render JSX onto the screen
//render is by-default name to use 
/*class App extends React.Component
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
*/
export default App;

  //useeffect , useState and Formic validator daikh kay aana ha 
  //login form implement krna ha