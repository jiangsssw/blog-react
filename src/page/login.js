import React from 'react'
import ReactDOM from 'react-dom'
import {Link,Redirect} from 'react-router-dom'


import '../styles/login.css'
class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            redirect: false
        }
    }
    //提交登录信息
    loginInclick(e){

        var nameNode = ReactDOM.findDOMNode(this.refs.username),
            passwordNode = ReactDOM.findDOMNode(this.refs.password),
            data = {
                'name' : nameNode.value,
                'userpassword': passwordNode.value
            },
            obj = {
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data)
                ,credentials: 'include'
            },
            url ='http://localhost:3000/enter';
            fetch(url,obj).then((res)=>{
                return res.json()
            }).then((res)=>{
                if(res.code=501){
                    this.setState({
                        redirect : true
                    });
                }else{
                    alert('密码错误');
                }
            }).catch((error)=>{
                alert('密码错误')
                return error;
            });
        e.preventDefault();
        e.stopPropagation();
    }
    componentWillMount(){
        var url = 'http://localhost:3000/mange';
        var ojbk = {
            method : 'get',credentials: 'include',
            headers : {
                'Access-Control-Allow-Origin':'*'
            },
            credentials: 'include'
        }
        fetch(url,ojbk).then((res)=>{
            return res;
        }).then((res)=>{
            if(res.status==500){
                this.setState({
                    redirect : true
                });
               
            }else{
                
            }
        });
    }
    render() {
        if (this.state.redirect) {
             return <Redirect push to="/manage" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
        }
        return ( <div className='login-body'>
       <div className="login">
            <form>
               <ul>
                   <li>
                       <span className="up_lable">登录名：</span>
                       <input className="username" type="text" name="name"ref='username' /></li>
                   <li>
                       <span className="up_lable">密码:</span>
                       <input className="userpassword" name="userpassword" ref='password' type="password" /></li>
               </ul>
               <div className="btn_group">
                   <input type="submit" value="登录"onClick={this.loginInclick.bind(this)} />
               </div>
                  <div className="f_jump"><Link to='/'>返回主页</Link></div>
           </form>
       </div>
   </div>);
    }
}

export default LoginComponent;