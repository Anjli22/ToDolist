import { Button,Typography } from '@mui/material'
import { display, style,  typographyVariant } from '@mui/system'
import React from 'react'

const Singletask = ({v,doneHandler,delHandler}) => {
    return (
        <div style={{marginTop:"20px"}}>
             <div style={{ color: "black", fontWeight: "400", fontSize: "1.3em",margin:"0% 20%", display:"flex",justifyContent:'space-evenly'}}>
           <div style={{textDecoration: v.done && "line-through",
            color: v.done && "#d7dbde",display:"inline-block"}}>
          {v.title}
          </div>
             <div style={{display:"flex",margin:"0 5%",width:"20%" ,marginTop:"0.5%"}}>
              <Button onClick={() => doneHandler(v.id) }
              
              style={{ marginLeft :"2%"}}
              variant="outlined"> {v.done ? "Undone" : "Done"}{" "}</Button>
              
              <Button  onClick={() => delHandler(v.id)} 
              style={{ marginLeft :"2%"}}variant="outlined">Delete</Button>
             </div>
            </div>
        </div>
    )
}

export default Singletask
