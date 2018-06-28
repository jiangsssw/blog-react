import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/demo.css'
class DemoComponent extends React.Component {


    //展示game節點
    showthisagme(e){
        // fetch(api+'/aaa/3',{method : 'get',credentials: 'include'}).then((res)=>{
        //     return res.json()
        // }).then((res)=>{
        //     console.log(res);
        // })
        var game = ReactDOM.findDOMNode(this.refs.game1);
        game.style.display = 'block';
        e.preventDefault();
        e.stopPropagation();
    }
    //隱藏game節點
    hiddenthisgame(e){
        var game = ReactDOM.findDOMNode(this.refs.game1);
        game.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
    //展示chat節點
    showthischat(e){
        var chatNode = ReactDOM.findDOMNode(this.refs.chatRobt);
        chatNode.style.display = 'block';
        e.preventDefault();
        e.stopPropagation();
    }
    //隱藏chat節點
    hiddenthischat(e){
        var chatNode = ReactDOM.findDOMNode(this.refs.chatRobt);
        chatNode.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
    //重置game
    replaygame(e){
        var gameReplay = ReactDOM.findDOMNode(this.refs.replay)
            gameReplay.contentWindow.location.reload(true);
        e.preventDefault();
        e.stopPropagation();
    }
    render() {

        return (
            <div className="main_content">
                <div className="text">
                    <article>
                        <div className="article_title"><a>打砖块</a></div>
                        <div className="article_preview_content"><p>小游戏打砖块，按键w开始，A,D键控制方向</p></div>
                    </article>
                    <input onClick={this.showthisagme.bind(this)} type="button" value="尝试一下" />
                    <div className="game1"ref='game1'>
                        <iframe className="show_game" ref='replay' src="../page/game1/paly.html" scrolling="no" name="ifrmname">
                        </iframe>
                        <input onClick={this.replaygame.bind(this)} type="button" value="再来一次" />
                        <input onClick={this.hiddenthisgame.bind(this)} type="button" value="收起来" />
                    </div>
                </div>
                <div className="text">
                    <article>
                        <div className="article_title"><a>聊天机器人</a></div>
                        <div className="article_preview_content"><p>可以和人一样陪你聊天哦，还是个萌妹子呢，还不快来撩一下……</p></div>
                    </article>
                    <input onClick={this.showthischat.bind(this)} type="button" value="了解一下" />
                    <div className="chat" ref='chatRobt'>
                        <iframe className="show_game" src="../page/chart.html" name="ifrmname">
                        </iframe>
                        <input onClick={this.hiddenthischat.bind(this)} type="button" value="收起来" />
                    </div>
                </div>


            </div>
        );
    }
}

export default DemoComponent;