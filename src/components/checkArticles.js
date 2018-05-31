import React from 'react';
import Pubsub from 'pubsub-js'

class CheckArticles extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articleTitle:'',
            articleContent:'',
            articleTime : ''
        }
    }
    componentWillMount(){
         var id= this.props.location.pathname.split('$')[1];
         var url ='http://localhost:3000/articles/'+id
            fetch(url,{method:'get'}).then((res)=>{
                return res.text();
            }).then((res)=>{

                //将res字符串中的\n,#<,>#转换为<br> &lt; &gt；,方便换行和代码显示
                 res = res.replace(/\\n/g,'<br/>');
                 res = res.replace(/#</g,'&lt;');
                 res = res.replace(/>#/g,'&gt;');
                var resd = eval('('+ res + ')');
                this.setState({
                    articleTitle : resd.title,
                    articleContent : resd.content,
                    articleTime : resd.time
                });
            });
       
    }
    componentWillUnmount(){
        Pubsub.unsubscribe('checkArticles');
    }
    render(){
        return (<div className="main_content">
        <div className="muban">
            <div className="text">
                <article>
                    <div className="article_title"><a>{this.state.articleTitle}</a></div>
                    <div className="article_content">
                    <p className="articleTime"> {this.state.articleTime}</p>
                    {/* 由于获取的数据带有\n的换行符，而react不能转译（或者我没有找到转译的方法），前面用正则将\n替换成了<br/>替代，
                        然后用dangerouslySetInnerHTML属性，这样又带来了一个安全问题，很容易受到代码注入
                    */}
                    <p dangerouslySetInnerHTML={{__html:this.state.articleContent}}></p>
                    </div>
                </article>
            </div>
        </div>
    </div>);
    }
}
export default CheckArticles;