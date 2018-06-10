import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/leaveMessage.css'

class manageSuggestion extends React.Component{
    constructor(propos){
        super(propos);
        this.state = {
            leaveMessage : []
        }
    }
    componentWillMount(){
        var url = 'http://wangjiang1996.applinzi.com/sss';
        fetch(url,{method : 'get',credentials: 'include'}).then((res)=>{
            return res.json();
        }).then((res)=>{
            var Message=[];
            for(let item in res){
                Message.unshift(res[item]);
            }
            this.setState({
                leaveMessage : Message
            });
        });
    }
    RemoveSuggestion(id,e){
        var SuggDom = ReactDOM.findDOMNode(this.refs['Rsugestion'+id]);
            SuggDom.style.display = 'none';
        fetch('http://wangjiang1996.applinzi.com/removeSugg/'+id,{method:'delete',credentials:'include'}).then((res)=>{
            return res.text()
        }).then();
        e.preventDefault();
        e.stopPropagation();
    }
    render(){
        var LMessages = this.state.leaveMessage,
             messageData = [];
        for(let item in LMessages){
            var random = 1000*Math.random();
            messageData.push( <div className="someone" key={LMessages[item].id+random} ref={'Rsugestion'+LMessages[item].id}>
                                <li><strong>呢称：</strong>{LMessages[item].fakername}</li>
                                <p>{LMessages[item].message}</p>
                                <li><small>时间:{LMessages[item].time}</small></li>
                                <div className="delete-suggestion" onClick={this.RemoveSuggestion.bind(this,LMessages[item].id)}>删除留言</div>
                             </div>
        )
        }
        return (<div className="main_content">
        <div className="check_message">
            {messageData}
            </div>
        </div>);
    }
}


manageSuggestion.defaultProps = {
};
export default manageSuggestion;