import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Plus from './components/Plus';
import Reset from './components/Reset';


type CounterPropsType = number


export default function App() {
    const [counter, setCounter] = useState<CounterPropsType>(0);
    
    const AddCount = (counter:number) => { 

      setCounter()

    }

    const ResetCount = () => {
  
      setCounter(0)
    }

    
   
    return (
      <div className="counter">
        <h1>Counter</h1>
        <Counter counter={counter}/>
        <div className="btn__container">
          <Plus setCounter={setCounter}/>
          <Reset setCounter={setCounter}/>
        </div>
      </div>
    );
  }
