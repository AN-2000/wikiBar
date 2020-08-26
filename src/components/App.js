import React from 'react';
import Accordian from './Accordian';
import Search from './Search'

const items = [
    {
        title:"What is React?",
        content:"Its a front-end Library"
    },
    {
        title:"Why use react?",
        content:"Makes front-end dev easier"
    },
    {
        title:"How do you use React?",
        content:"By making components"
    }
]

const App = ()=>{
    return (
        <div style={{padding:"32px"}}>
           {/* <Accordian items = {items}/> */}
           <Search/>
        </div>
        
    )
}

export default App;