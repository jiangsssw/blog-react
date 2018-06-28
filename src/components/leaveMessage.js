import React from 'react'
import ReactDOM from 'react-dom'
import getTime from '../function/time'

import api from '../config/api';
import '../styles/leaveMessage.css'
var Message =[]
class LeaveMessageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leaveMessage : []
        }
    }


    //点击提交验证邮箱格式是否合法，有无缺填选项，若无误则提交至服务器
    subMitClick(e) {
        var name = ReactDOM.findDOMNode(this.refs.writeName),
            email = ReactDOM.findDOMNode(this.refs.writeEmail),
            suggestionDom = ReactDOM.findDOMNode(this.refs.writeSuggestion),
            fishedDom = ReactDOM.findDOMNode(this.refs.fished0),
            info = ReactDOM.findDOMNode(this.refs.writeInfor);
        var index = email.value.indexOf('@'),
            data = {
                'time': getTime(),
                'fakername': name.value,
                'email': email.value,
                'message': info.value
            },
            obj = {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: data
                ,credentials: 'include'
            };
            console.log(JSON.stringify(data));
            suggestionDom.style.display = 'none';
            fishedDom.style.display = 'block';
        var url = api+'/sssWrite';
        if (name.value !== '' && name.value !== undefined) {
            if (email.value !== '' && email.value !== undefined) {
                if (index > 0) {
                    if (info.value !== '' && name.value !== undefined) {
                        fetch(url, obj).then((res) => {
                            return res.json();
                        }).then((res)=>{
                             //将新写入的信息直接添加到留言板中,隱藏留言輸入框
                             Message.unshift(res);
                             this.setState({
                                leaveMessage : Message
                             });
                             setTimeout(() => {
                                fishedDom.style.display = 'none';
                             }, 2000);
                             
                        });
                    } else {
                        alert('建议不能为空')
                    }
                } else {
                    alert('邮箱地址不合法,请检查一下你输入的邮箱地址')
                }
            } else {
                alert('邮箱不能为空')
            }
        } else {
            alert('呢称不能为空')
        }
        e.preventDefault();
        e.stopPropagation();
    }
    componentWillMount(){
        var url = api+'/sss';
        fetch(url,{method : 'get',credentials: 'include'}).then((res)=>{
            return res.json();
        }).then((res)=>{
            Message.splice(0,Message.length)
            for(let item in res){
                Message.unshift(res[item]);
            }
            this.setState({
                leaveMessage : Message
            });
        });
    }
    render() {
        var LMessages = this.state.leaveMessage,
             messageData = [];
        for(let item in LMessages){
            var random = 10000*Math.random()
            messageData.push( <div className="someone" key={LMessages[item].id+random}>
                                <li><strong>呢称：</strong>{LMessages[item].fakername}</li>
                                <p>{LMessages[item].message}</p>
                                <li><small>时间:{LMessages[item].time}</small></li>
                             </div>
        )
        }
        return (
            <div className="main_content">
                <div className="suggestion">
                    <div ref='writeSuggestion'>
                    <div className="faker_name">
                        <ul>
                            <li>
                                <a>请输入你的呢称：</a>
                                <input className="write_message_name" ref='writeName' type="text" />
                                <span><small>*必填</small></span>
                            </li>
                            <li> <a>请留下你的邮箱：</a>
                                <input className="write_message_email" type="text" ref='writeEmail' placeholder="someone@xxx.com" />
                                <span><small>*必填</small></span>
                            </li>
                        </ul>
                    </div>
                    <div className="message_text">
                        <a>请输入您的建议和想说的话<span><small>*必填</small></span></a>
                        <div>
                            <textarea name="infomation" ref='writeInfor'></textarea>
                        </div>
                    </div>
                    <button className="put_in" onClick={this.subMitClick.bind(this)}>提交</button>
                    </div>
                    <div className="fished" ref="fished0">
                        <a>OK,恭喜你提交成功，感谢您的建议。3秒后返回。。</a>
                        <div className="success_pic">
                        </div>
                    </div>
                    
                    <div className="check_message">
                        <span>留言板</span>
                       {messageData}
                    </div>
                </div>
            </div>
        )
    }

}

export default LeaveMessageComponent;