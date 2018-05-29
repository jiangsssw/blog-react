import React from 'react'

class BgFrameConponent extends React.Component{


    render(){
        return (
         <div>
        <header className="header">
            <h3>欢迎来到我的个人网站</h3>
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
                    <li className="aside_title" >推荐文章名字</li>
                </ul>
            </div>
            <div className="visited">
                <div>
                    <a>本网站访问次数:<span id="counts">显示访问人数</span></a>
                </div>
            </div>
        </div>
        
    </div>
    );
    }

}
BgFrameConponent.defaultProps = {
};

export default BgFrameConponent;
