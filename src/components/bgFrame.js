import React from 'react'
import { Link } from 'react-router-dom'
import Pubsub from 'pubsub-js'

var Artlength;
class BgFrameConponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            articlesItem: '11',
            idd:''
        }
    }
    reflashLoad(e){
        location.reload();
        e.preventDefault();
        e.stopPropagation();
    }
componentWillMount(){
    let articlesTitle=[]
    let articlesId=[]
    let obj={
        method:'get',
        idd:''
    }
    fetch('http://localhost:3000/articles',obj).then((res)=>{
        return res.json();
    }).then((res)=>{
        // console.log(res[2].title);
        for(let item in res){
            articlesTitle.push(res[item].title);
            articlesId.push(res[item].id);
        }
        //发布一个订阅时间，发布文章的数目
        Artlength=res.length;
        var a = res.length;
        
        Pubsub.publish('ArticlesLengthTo',a);
        this.props.readData(Artlength);
        this.setState({
            idd : articlesId,
            articlesItem: articlesTitle
        });
    })
}
    render(){
        return (
         <div>
        <header className="header">
            <h3>欢迎来到我的个人网站</h3>
        </header>
        <div className="navigation">
            {/* 这里将li的开始标签和结束标签不写在一行是为了消除li之间存在空白字符的问题*/}
            <ul>
                <li><Link to='/' >主页</Link>
                </li><li><Link to='/manage'>管理文章</Link>
            </li><li><Link to="/leaveMessage" >留言</Link >
            </li><li><Link to="/picture" >图片</Link >
            </li><li><Link to="/demo" >小程序</Link >
            </li><li><a>网站介绍</a>
            </li><li><Link to="/login">管理员登录</Link >
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
                    <li className="aside_title" ><Link to={'/checkArticle/$'+this.state.idd[0]}>{this.state.articlesItem[0]}</Link></li>
                    <li className="aside_title" ><Link to={'/checkArticle/$'+this.state.idd[1]} >{this.state.articlesItem[1]}</Link></li>
                    <li className="aside_title" ><Link to={'/checkArticle/$'+this.state.idd[2]} >{this.state.articlesItem[2]}</Link></li>
                    <li className="aside_title" ><Link to={'/checkArticle/$'+this.state.idd[3]} >{this.state.articlesItem[3]}</Link></li>
                    <li className="aside_title" ><Link to={'/checkArticle/$'+this.state.idd[4]} >{this.state.articlesItem[4]}</Link></li>
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


export default BgFrameConponent;
