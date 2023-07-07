import "../styles/Login.css"
function Login() {
    return (
        <div className="main">
            <div className="content">
            <h1>
                登录
            </h1>
            
            <form className='loginForm'>
            <div className="username">
                <p>账号:</p>
                <input type="text" />
                </div>
                <div className="password">
                <p>密码:</p>
                <input type="password" />
                </div>
                <input type='submit' value="登 录"/>
            </form>
            </div>
        </div>
    )
}
export default Login