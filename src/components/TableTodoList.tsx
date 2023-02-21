import React, { Fragment } from "react";
import "../styles/TableTodoList.css"
import { ItoDoItem } from "../interfaces/ItoDoItem";


const Todo = ({ data }: { data: ItoDoItem }) => {
    return (
        <Fragment>
            <tr>
                <th>{data.index}</th>
                <th>{data.done ? "√" : ""}</th>
                <th>{data.text}</th>
                <th></th>
            </tr>
        </Fragment>
    )
}


const TableTodoList = ({ toDoList }: { toDoList: ItoDoItem[] }) => {

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
                        <Todo data={item} />
                    )
                })}
            </tbody>
        </table>

    )
}

export default TableTodoList
