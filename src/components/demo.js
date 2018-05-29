import React from 'react'
import '../styles/demo.css'
class DemoComponent extends React.Component {

    render() {

        return (
            <div className="main_content">
                <div className="text">
                    <article>
                        <div className="article_title"><a>打砖块</a></div>
                        <div className="article_preview_content"><p>小游戏打砖块，按键w开始，A,D键控制方向</p></div>
                    </article>
                    <input onclick="showthisagme()" type="button" value="尝试一下" />
                    <div className="game1">
                        <iframe className="show_game" src="../page/game1/paly.html" scrolling="no" name="ifrmname">
                        </iframe>
                        <input onclick="replaygame()" type="button" value="再来一次" />
                        <input onclick="hiddenthisgame()" type="button" value="收起来" />
                    </div>
                </div>
                <div className="text">
                    <article>
                        <div className="article_title"><a>聊天机器人</a></div>
                        <div className="article_preview_content"><p>可以和人一样陪你聊天哦，还是个萌妹子呢，还不快来撩一下……</p></div>
                    </article>
                    <input onclick="showthischat()" type="button" value="了解一下" />
                    <div className="chat">
                        <iframe className="show_game" src="../page/chart.html" name="ifrmname">
                        </iframe>
                        <input onclick="hiddenthischat()" type="button" value="收起来" />
                    </div>
                </div>


            </div>
        );
    }
}

export default DemoComponent;