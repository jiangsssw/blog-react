import React from 'react'
import '../styles/BgFrame.css'

class BgFrameConponent extends React.Component{


    render(){
        return (
         <div>
        <div className="container">
        <header className="header">
            <blockquote>
                <p>
                    欢迎来到我的个人网站
                </p>
            </blockquote>
        </header>
        <div className="navigation">
            {/* 这里将li的开始标签和结束标签不写在一行是为了消除li之间存在空白字符的问题*/}
            <ul>
                <li><a href="/">主页</a>
                </li><li><a href="/mange">管理文章</a>
            </li><li><a href="/leave">留言</a>
            </li><li><a href="/picture">图片</a>
            </li><li><a href="/demo">小程序</a>
            </li><li><a onclick="introuduce(3)">网站介绍</a>
            </li><li><a href="/login">管理员登录</a>
            </li>
            </ul>
        </div>
        <div className="sidebar">
            <div className="buddha">
                <div className="buddha_pic">

                </div>
                <span><strong>96sir</strong></span>
            </div>
            <div className="author">
                <ul>
                    <li>性别：<label>男</label></li>
                    <li>职业：<label>学生</label></li>
                    <li>个人简介：</li>
                    <p>一个正在努力的大学僧。。。</p>
                </ul>
            </div>
            <div className="recommend">
                <label>推荐文章</label>
                <ul className="aside_ul">
                    <li className="aside_title" ><a onclick="abc('$$id$$')">$$title$$</a></li>
                </ul>
            </div>
            <div className="visited">
                <div>
                    <a>本网站访问次数:<span id="counts"></span></a>
                </div>
            </div>
        </div>
        <div className="main_content">
            <div className="template_index_art">
                <div className="text">
                    <article>
                        <div className="article_title"><a onclick="abc('$$id$$')">$$title$$</a></div>
                        <div className="article_preview_content"><small><p>$$preview$$</p></small></div>
                    </article>
                </div>
            </div>
            <aside>
                <p>第<span id="page_number"></span>页</p>
                <div>
                    <button className="article_next">上一页</button>
                    <button className="previous_page">下一页</button>
                </div>
            </aside>
        </div>
    </div>
    <footer className="footer">
        <div className="foot_background">
            <span>备案信息</span>
        </div>
    </footer>
    </div>
    );
    }

}
BgFrameConponent.defaultProps = {
};

export default BgFrameConponent;
