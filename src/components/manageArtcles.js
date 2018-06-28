import React from 'react'
import ReactDOM from 'react-dom'
import { Link,Redirect} from 'react-router-dom'
import Pubsub from 'pubsub-js'

import api from '../config/api';
var  Articles = [];
let ArticlesDatas = []
var  index = 1;
var url = api+'/look/'+index
var lastpages;
var id;
class MannageArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allArticles: '',
            pages: '',
            Predisabled: '',
            Nextdisabled: '',
            isDisplay: '',
            isId : '',
            isRedirect: false
        }
    }
    getRefleshDataFromServer(url) {
        return fetch(url, { method: 'get',credentials: 'include' }).then((res) => {
            return res.json();
        }).then((res) => {
            ArticlesDatas.splice(0,ArticlesDatas.length);
            for (let item in res) {
                
                ArticlesDatas[item] = res[item];
            }
            this.setState({
                allArticles: ArticlesDatas
            })
        });
    }
    getNextpage(e) {
        index++;
       this.setButtonclick();
        url = api+'/look/' + index ;
        this.getRefleshDataFromServer(url);
        
        e.preventDefault();
        e.stopPropagation();
    }
    getPrePage(e) {
        index--;
        url = api+'/look/' + index ;
        this.getRefleshDataFromServer(url);
        this.setButtonclick();
        e.preventDefault();
        e.stopPropagation();
    }
    //设置button是否能点击
    setButtonclick() {
        if (index == 1) {
            this.setState({
                Predisabled: 'disabled'
            })
        } else {
            this.setState({
                Predisabled: ''
            });
        }
        if (index == lastpages) {
            this.setState({
                Nextdisabled: 'disabled'
            })
        } else {
            this.setState({
                Nextdisabled: ''
            })
        }
    }
    //跳转到修改文章的页面
    toAmendArticles(id, e) {
        this.setState({
            isId : id,
            isRedirect : true
        });
        e.preventDefault();
        e.stopPropagation();
    }
    //删除文章
    toDeleteArticles(id, e) {
        var api = api+'/ddd/'+id;
        fetch(api,{method : 'delete',credentials: 'include'}).then((res)=>{
            return res;
        }).then();
        var a = ReactDOM.findDOMNode(this.refs['articles'+id]);
       a.style.display='none';
        e.preventDefault();
        e.stopPropagation();
    }
    componentWillMount() {
        this.setButtonclick();

        fetch(url, { method: 'get',credentials: 'include' }).then((res) => {
            return res.json();
        }).then((res) => {
            
            this.setState({
                allArticles: res
            })
        });
    
    }
    componentDidMount(){
        var page=Math.ceil(this.props.data/4);
       this.setState({
            pages : page
       });
    }
componentWillUnmount(){
    Pubsub.unsubscribe('ArticlesLengthTo');
}
   
    render() {
        var art = this.state.allArticles;
        var time;
        Articles.splice(0,Articles.length)
        for(let item in art){
            time = 100*Math.random()+item;
            var articleContent=art[item].content.substr(0,150);
            Articles[item]=(<div className="muban" key={time}
             ref={'articles'+art[item].id}>
               <div className="text">
                     <article>
                         <label onClick={this.toAmendArticles.bind(this, art[item].id)}><input className="amendeArticle" type="button" value="修改" /></label>
                         <label onClick={this.toDeleteArticles.bind(this, art[item].id)}><input className="deleteArticle" type="button" value="删除" /></label><span className="isDelete"></span>
                         <div className="article_title"><Link to={'/checkArticle/$' + art[item].id} >{art[item].title}</Link></div>
                         <div className="article_preview_content"><p>{articleContent}</p></div>
                     </article>
                 </div>
             </div>)}
             if(this.state.isRedirect){
                 return <Redirect push to={'/writeArticles/$' + this.state.isId} />;
             }
             return (
            <div>
                <div className="main_content">
                    <div className="write_article"><div className="xieArticles"><Link to='/writeArticles'>写文章</Link></div></div>
                    <div className="write_article"><div className="shanSuggestion"><Link to='/managesuggestion'>管理留言</Link></div></div>
                    {Articles}
                    <aside>
                        <p>第<span id="page_number">{index}</span>页共{this.state.pages}页</p>
                        <div>
                            <button className="previous_page" onClick={this.getPrePage.bind(this)} disabled={this.state.Predisabled}>上一页</button>
                            <button className="article_next" ref='Nextdisabled' onClick={this.getNextpage.bind(this)} disabled={this.state.Nextdisabled}>下一页</button>
                        </div>
                    </aside>
                </div>
            </div>

        );
    }
}



MannageArticles.defaultProps = {
};
export default MannageArticles;