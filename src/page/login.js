import React from 'react'
import '../styles/login.css'
class LoginComponent extends React.Component {

    render() {
        <div className='login-body'>
            <div class="login">
                <form method="post" action="/enter">
                    <ul>
                        <li>
                            <span class="up_lable">登录名：</span>
                            <input class="username" type="text" name="name" /></li>
                        <li>
                            <span class="up_lable">密码:</span>
                            <input class="userpassword" name="userpassword" type="password" /></li>
                    </ul>
                    <div class="btn_group">
                        <input type="submit" value="提交" />
                    </div>
                </form>
                <button class="f_jump"><a>返回主页</a></button>
            </div>
        </div>
    }
}

export default LoginComponent;