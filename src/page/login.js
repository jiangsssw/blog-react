import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/login.css'
class LoginComponent extends React.Component {

    render() {
       return ( <div className='login-body'>
       <div className="login">
           <form method="post" action="/enter">
               <ul>
                   <li>
                       <span className="up_lable">登录名：</span>
                       <input className="username" type="text" name="name" /></li>
                   <li>
                       <span className="up_lable">密码:</span>
                       <input className="userpassword" name="userpassword" type="password" /></li>
               </ul>
               <div className="btn_group">
                   <input type="submit" value="提交" />
               </div>
           </form>
           <button className="f_jump"><Link to='/'>返回主页</Link></button>
       </div>
   </div>);
    }
}

export default LoginComponent;