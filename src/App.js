/*************/
// REDUCER
/*************/

// import {useReducer} from 'react';

// const initialState = {
//   balance : 0
// }

// function reducer(state,action){
//   switch(action.type){
//     case 'plus':
//       return {balance : state.balance + action.amt}
//     case 'minus':
//       return {balance : state.balance - action.amt}
//     default:
//       return state.balance
//   }
// }

// function App(){
//   const [ state, dispatch ] = useReducer(reducer,initialState);
  
//   function increment(){
//     var amount = parseInt(prompt("Enter Amount : "));
//     dispatch({type : 'plus', amt : amount });
//   }

//   function decrement(){
//     var amount = parseInt(prompt("Enter Amount : "));
//     dispatch({type : 'minus', amt : amount });
//   }
  
//   return(
//     <>
//       <div>Balance : {state.balance} </div>
//       <button onClick = {decrement}>Withdraw</button>
//       <button onClick = {increment}>Deposit</button>
//     </>
//   )
// }

// export default App;

/***********/
// USEREF
/**********/

// import {useRef} from 'react';

// function App(){
//     const renderCount = useRef(0);

//     function increment(){
//       renderCount.current += 1;

//     }
//     return (
//       <>  
//           <input type = "button" 
//                 value = "click me"
//                 onClick = {increment}></input>
//           <div>
//             {renderCount.current}
//           </div>
//       </>
//     )
// }

// export default App;

/**************/
// Context
/**************/

// import {useState,useContext,createContext} from 'react';

// const context = createContext();

// function GrandChild(){
//   const {count, setCount } = useContext(context);
  
//   function increment(){
//       setCount(count + 1);
//   }

//   return(
//     <>
//       <div>GrandChild</div>
//       <button onClick = {increment}>Click me</button>
//       <div>Counter : {count} </div>
//     </>
//   )
// }

// function Child(){
//   return(
//     <>
//       <div>Child</div>
//       <GrandChild/>
//     </>
//   )
// }

// function App(){
//   const [count,setCount] = useState(0);
//   return(
    
//       <context.Provider value = {{count,setCount}}>
//         <Child></Child>
//       </context.Provider>
    
//   )
// }

// export default App

/************/
//Custom Hook
/************/

// import useFactorial from './useBank';

// function App(){
  
//   const { number, factorial, HandleChange, calculateFactorial } = useFactorial();

//   return(
//     <>
//       <input type = "text" onChange = {HandleChange} />
//       <button onClick = {calculateFactorial}>Calculate</button>
//       <p>{ factorial != null ? factorial : "" }</p>
//     </>
//   )
// }

// export default App;













import React,{useState} from 'react';

function App(){
  var [ number, setNumber ] = useState(null);
  var [ armstrong, setArmstrong ] = useState(null);

  function HandleInput(event){
    setNumber(event.target.value);
  }
  
  function checkArmstrong(){
    if ( number != null ){
      var temp = number;
      var sum = 0;
      while ( number > 0 ){
        sum += Math.pow(number % 10,3);
        number = Math.floor(number / 10);
      }
      if ( sum == temp ){
        setArmstrong("yes");}
      else{
        setArmstrong("no");
      }
    }
    else{
      setArmstrong("Enter a number first");
    }
  }
  
  return(
    <>
      <input type = "text" onChange = {HandleInput}></input>
      <button onClick = {checkArmstrong}>Check</button>
      <p>{armstrong != null ? armstrong : ""}</p>
    </>
  )
}

export default App;


















