import React, { useState } from 'react'
import './External.css'

const Buttons = () => {
  
    const [val,setVal] = useState("");
    const allClear = () =>{
        try{
            setVal("")
        }catch(error){
            setVal("")
        }
    }
    const backSpace = () =>{
        try{
            setVal(val.slice(0,-1))
        }catch(error){
            setVal("")
        }
    }
    const percentage = () =>{
        try{
            setVal(val/100)
        }catch(error){
            setVal("")
        }
    }
    const compute = ()=>{
        try{
            setVal(eval(val));
        }catch(error){
            setVal("Error")
        }
    }
   
  return (
    <div>
        <div class="calculator">
        <input type="text" placeholder="0" id="inputBox" value={val}/>
        <div>
            <button class="operator" value="AC"onClick={(e)=>allClear()}>AC</button>
            <button class="operator" value="DEL"onClick={(e)=>backSpace()}>DEL</button>
            <button class="operator" value="%"onClick={(e)=>percentage()}>%</button>
            <button class="operator" value="/"onClick={(e)=>setVal(val + e.target.value)}>/</button>
        </div>
        <div>
            <button value="7"onClick={(e)=>setVal(val + e.target.value)}>7</button>
            <button value="8"onClick={(e)=>setVal(val + e.target.value)}>8</button>
            <button value="9"onClick={(e)=>setVal(val + e.target.value)}>9</button>
            <button  class="operator" value="*"onClick={(e)=>setVal(val + e.target.value)}>*</button>
        </div>
        <div>
            <button value="4"onClick={(e)=>setVal(val + e.target.value)}>4</button>
            <button value="5"onClick={(e)=>setVal(val + e.target.value)}>5</button>
            <button value="6"onClick={(e)=>setVal(val + e.target.value)}>6</button>
            <button class="operator" value="-"onClick={(e)=>setVal(val + e.target.value)}>-</button>
        </div>
        <div>
            <button value="1"onClick={(e)=>setVal(val + e.target.value)}>1</button>
            <button value="2"onClick={(e)=>setVal(val + e.target.value)}>2</button>
            <button value="3"onClick={(e)=>setVal(val + e.target.value)}>3</button>
            <button class="operator" value="+"onClick={(e)=>setVal(val + e.target.value)}>+</button>
        </div>
        <div>
            <button value="00"onClick={(e)=>setVal(val + e.target.value)}>00</button>
            <button value="0"onClick={(e)=>setVal(val + e.target.value)}>0</button>
            <button value="."onClick={(e)=>setVal(val + e.target.value)}>.</button>
            <button class="equalBtn" value="="onClick={()=> compute()}>=</button>
        </div>
    </div>
    </div>
  )
}

export default Buttons