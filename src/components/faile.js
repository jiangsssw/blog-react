import React from 'react'
import '../styles/login.css'
class FaileComponent extends React.Component {

    render() {

        return (
            <div className='login-body'>
                <div class="login">
                    <ul>
                        <li>登录失败,账号或密码错误</li>
                        <li>你总共只有3次机会</li>
                    </ul>
                    <div class="btn_group">
                        <button class="jump"><a>返回主页</a></button>
                        <input class="r_login" type="button" value="返回登录页面" />
                    </div>
                </div>
            </div>
        );
    }
}

export default FaileComponent;