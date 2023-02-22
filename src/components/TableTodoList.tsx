import React, { Fragment } from "react";
import "../styles/TableTodoList.css"

export interface ItoDoItem {
    index: number;
    done: boolean;
    text: string;
    time: string;
}

const Todo = ({ data,onClick }: { data: ItoDoItem;onClick:(props:string)=>void }) => {
    return (
        <Fragment>
            <tr>
                <th>{data.index}</th>
                <th>{data.done ? "√" : ""}</th>
                <th>{data.text}</th>
                <th><button onClick={()=>onClick(data.text)}>我看</button></th>
            </tr>
        </Fragment>
    )
}


const TableTodoList = ({ toDoList,showDetail }: { toDoList: ItoDoItem[];showDetail:(props:string)=>void }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th style={{ width: "8%" }}>#</th>
                    <th style={{ width: "8%" }}>√</th>
                    <th>Title</th>
                    <th style={{ width: "15%" }}></th>
                </tr>
            </thead>
            <tbody>
                {toDoList.map((item) => {
                    return (
                        <Todo data={item} key={item.index} onClick={showDetail}/>
                    )
                })}
            </tbody>
        </table>

    )
}

export default TableTodoList
