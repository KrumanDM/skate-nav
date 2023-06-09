import React, { useState } from "react";

type AccordionPropsType ={
    titleValue: string
}

const UncontrolledAccordion = () => {

     let [collapsed,setCollapsed] = useState(false)

     return(
        <div>
            
            {/* <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/> */}
            
            {!collapsed && <AccordionBody/>}
        </div>
     )
}

export default UncontrolledAccordion

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


const AccordionTitle =(props:AccordionTitlePropsType)=>{
    return(
        <h3 onClick={()=>{props.onClick()}}>{props.title}==</h3>
    )
}


const AccordionBody = () => {
    return(
        <ul>
            <li>maps</li>
            <li>nav</li>
            <li>search</li>
        </ul>
    )
}