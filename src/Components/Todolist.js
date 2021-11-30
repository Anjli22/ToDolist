
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Singletask from "./Singletask";

const Todolist = () => {

    const [inputValue, setInputValue] = useState("");
    const [listValue, setListValue] = useState([]);
  
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
  
      if (storedTodos) {
        setListValue(storedTodos);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(listValue));
    }, [listValue]);
  
    const pushListValue = () => {
      // localStorage.removeItem("todos");
    
  if(inputValue === ""){
  window.confirm("first enter yor task  ");
  }else{
      setListValue([
        { id: Date.now(), title: inputValue, done: false },
        ...listValue,
      ]);
      setInputValue("");}
    };
  
    const doneHandler = (todoId) => {
      const index = listValue.findIndex((emp) => emp.id === todoId);
  
      const newTodo = [...listValue];
  
      newTodo[index] = {
        id: listValue[index].id,
        title: listValue[index].title,
        done: !listValue[index].done,
      };
      setListValue(newTodo);
    };
  
    const delHandler = (todoId) => {
      if (window.confirm("Are you sure ? ")) {
        const updatedList = listValue.filter((item) => item.id !== todoId);
        setListValue(updatedList);
      }
    };
    const Reset =()=>{
      setListValue([]);
    };
    return (
        
            <div className="App">
            <div 
            style={{display:"flex",justifyContent:"center",margin:"20px 0px"}}
            >
            <input
                type="text"
                placeholder="List your task............"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{height:"30px", width:"30%",marginRight:"10px"}}
            />
            
            <Button onClick={pushListValue} variant="outlined" style={{}}>Add Task</Button>
            </div>
            <div style={{ background: "#ba9895", height: "70vh",margin:"0 10%" }}>
                {listValue.map((v, i) => {
                return (
                    <>
                    <Singletask
                        v={v}
                        doneHandler={doneHandler}
                        delHandler={delHandler}
                    /> 
                    </>
                );
                })}
            </div>
            <div style={{display:"flex",justifyContent:"flex-end", marginRight:"2%"}}>
            <Button onClick={Reset}variant="outlined">reset</Button>
            </div>
        </div>
   
    );
};

export default Todolist;
