import React from "react";

const TodoItem = ({ text, time }: { text: string; time: string }) => {
    const TodoMainStyle = {
        display: 'flex',
        justyConten: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        margin: "10px"
    }
    const TodoContextstyle = {
        // textIndent:'2em',
        width: '250px',
        borderRadius: '20px',
        backgroundColor: "#fdfeb8", 
        color: '#000000',
        padding: '10px 20px 10px 20px',
        wordWrap: 'break-word' as 'break-word',
        textDecoration: "underline"
    }
    const TodoTimestyle = {
        paddingLeft: '20px',
        display: 'flex',
        justyConten: 'center',
        alignItems: 'center',
        width: '200px',
        height: '40px',
        margin: '20px',
        borderRadius: '20px',
        backgroundColor: "#fdfeb8",
        color: '#000000',
        // fontSize: '15px'
    }
    if(text.length>50){
        text=text.slice(0,50)+"..."
    }
    return (
        <div className="Main" style={TodoMainStyle}>
            <div style={TodoContextstyle}>{text}</div>
            <div style={TodoTimestyle}>{time}</div>
        </div>
    )
};
export default TodoItem