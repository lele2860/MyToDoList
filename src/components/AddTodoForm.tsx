import React, { useState,useRef } from 'react'
import "../styles/AddTodoForm.css"





const AddTodoForm = (props: any) => {
    const [addValue, setAddValue] = useState("")
    const [isValid, setIsValid] = useState<Boolean>(true)
    const [isTouch, setIsTouch] = useState(false)
    const errorMessage = "好歹写点东西吧"
    const textAreaRef=useRef<HTMLTextAreaElement>(null);

    const handleAddInputChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value !== "") { setIsValid(false) }
        setAddValue(e.target.value);
        e.target.style.height = 'auto';
        e.target.scrollTop = 0;
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (!isTouch) { setIsTouch(true) }
        addValue === "" ? setIsValid(true) : setIsValid(false)
    }


    const callFunction = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (isValid || addValue === "") {
            setIsValid(true)
            setIsTouch(true)
            return
        }
        props.click(addValue)
        setAddValue("")
        if(textAreaRef.current!=null){
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.scrollTop = 0;
            textAreaRef.current.style.height = "";
        }
    }

    return (
        <div>
            <form className='listForm'>
                <textarea
                ref={textAreaRef}
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
            <small><center>{isTouch && isValid && errorMessage}</center></small>
        </div>
    )
}

export default AddTodoForm
