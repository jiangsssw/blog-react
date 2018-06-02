import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Pubsub from 'pubsub-js'

var  Articles = [];
let ArticlesDatas = []
var  index = 1;
var url = 'http://localhost:3000/articles?_page=' + index + '&_limit=4';
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
            isDisplay: ''
        }
    }
    getRefleshDataFromServer(url) {
        return fetch(url, { method: 'get' }).then((res) => {
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
        url = 'http://localhost:3000/articles?_page=' + index + '&_limit=4';
        this.getRefleshDataFromServer(url);
        
        e.preventDefault();
        e.stopPropagation();
    }
    getPrePage(e) {
        index--;
        url = 'http://localhost:3000/articles?_page=' + index + '&_limit=4';
        this.getRefleshDataFromServer(url);
        this.setButtonclick();
        e.preventDefault();
        e.stopPropagation();
    }
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
    toAmendArticles(id, e) {
        location.href = '/writeArticles/$' + id
        e.preventDefault();
        e.stopPropagation();
    }
    toDeleteArticles(id, e) {
    
        var a = ReactDOM.findDOMNode(this.refs['articles'+id]);
       a.style.display='none';
        e.preventDefault();
        e.stopPropagation();
    }
    componentWillMount() {
        this.setButtonclick();

        fetch(url, { method: 'get' }).then((res) => {
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
            time = 100*Math.random()+item
            Articles[item]=(<div className="muban" key={time}
             ref={'articles'+art[item].id}>
               <div className="text">
                     <article>
                         <label onClick={this.toAmendArticles.bind(this, art[item].id)}><input type="button" value="修改" /></label>
                         <label onClick={this.toDeleteArticles.bind(this, art[item].id)}><input type="button" value="删除" /></label><span className="isDelete"></span>
                         <div className="article_title"><Link to={'/checkArticle/$' + art[item].id} >{art[item].title}</Link></div>
                         <div className="article_preview_content"><p>{art[item].preview}</p></div>
                     </article>
                 </div>
             </div>)} return (
            <div>
                <div className="main_content">
                    <div className="write_article"><button><a>写文章</a></button></div>
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