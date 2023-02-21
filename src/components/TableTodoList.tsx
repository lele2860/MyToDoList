import React from "react";
import "../styles/TableTodoList.css"


const Todo=()=>{
    return (
    <div></div>
    )
}


const TableTodoList=()=>{
    
    return (
        <table>
            <thead>
                <th style={{width:"8%"}}>#</th>
                <th style={{width:"8%"}}>√</th>
                <th>Title</th>
                <th style={{width:"15%"}}></th>
            </thead>
            <tbody>
                <tr>
                <th>1</th>
                <th>√</th>
                <th>My Title</th>
                </tr>
                <tr>
                <th>2</th>
                <th> </th>
                <th>My Title.042.045.45.4</th>
                <th><button >123</button></th>
                </tr>
            </tbody>
        </table>

    )
}

export default TableTodoList