import React,{useState} from 'react';

function useFactorial(){
  const [number , setNumber] = useState('');
  const [factorial , toggleDisplay ] = useState(null);

  function HandleChange(event){
    setNumber(event.target.value);
  }
  
  function calculateFactorial(){
    var result = 1;
    for ( let i = 1; i <= number; i ++ ){
      result *= i;
    }
    toggleDisplay(result);
  }

  return({number,factorial,HandleChange,calculateFactorial})
}

export default useFactorial;