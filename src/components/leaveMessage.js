import React from 'react'
import '../styles/leaveMessage.css'
class LeaveMessageComponent extends React.Component {

    render() {
        return (
            <div className="main_content">
                <div className="suggestion">
                    <div className="faker_name">
                        <ul>
                            <li>
                                <a>请输入你的呢称：</a>
                                <input className="write_message_name" type="text" />
                                <span><small>*必填</small></span>
                            </li>
                            <li> <a>请留下你的邮箱：</a>
                                <input className="write_message_email" type="text" placeholder="someone@xxx.com" />
                                <span><small>*必填</small></span>
                            </li>
                        </ul>
                    </div>
                    <div className="message_text">
                        <a>请输入您的建议和想说的话<span><small>*必填</small></span></a>
                        <div>
                            <textarea name="infomation"></textarea>
                        </div>
                    </div>
                    <button className="put_in">提交</button>
                    <div className="fished">
                        <a>OK,恭喜你提交成功，感谢您的建议。3秒后返回。。</a>
                        <div className="success_pic">
                        </div>
                    </div>
                    <div className="check_message">
                        <span>留言板</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default LeaveMessageComponent;