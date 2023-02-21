import React, { useState } from 'react'
import "../styles/AddTodo.css"





const AddTodo = (props: any) => {
    const [addValue, setAddValue] = useState("")
    const [isValid, setIsValid] = useState<Boolean>(true)
    const [isTouch, setIsTouch] = useState(false)
    const errorMessage = "好歹写点东西吧"

    const handleAddInputChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value !== "") { setIsValid(false) }
        setAddValue(e.target.value)
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (!isTouch) { setIsTouch(true) }
        addValue === "" ? setIsValid(true) : setIsValid(false)
    }


    const callFunction = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (isValid||addValue==="") { 
            setIsValid(true)
            setIsTouch(true)
            return 
        }
        props.click(addValue)
        setAddValue("")
    }

    return (
        <div>
            <form className='listForm'>
                <textarea
                    className='textArea'
                    value={addValue}
                    placeholder='write something'
                    onChange={handleAddInputChanges}
                    onBlur={handleBlur}
                />
                <input className='btn'
                    value="Add"
                    onClick={callFunction}
                    type='submit' />

            </form>
            <small><center>{ isTouch&&isValid && errorMessage}</center></small>
        </div>
    )
}

export default AddTodo
