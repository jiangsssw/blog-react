import React from 'react'
import Pubsub from 'pubsub-js'
let Articles=[];
let index = 1;
var reflesh;
var url = 'http://localhost:3000/articles?_page='+index+'&_limit=4'
class ArticlesConpoment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allArticles:'',
            pages:'',
            disabled:''
        }
    }
    getRefleshDataFromServer(url){
        return fetch(url,{method:'get'}).then((res)=>{
            return res.json();
        }).then((res)=>{
            for(let item in res){
                reflesh[item]=( <div key={res[item].id}>
                <div className="muban" >
                <div className="text">
                    <article>
                        <div className="article_title"><a>{res[item].title}</a></div>
                        <div className="article_preview_content"><p>{res[item].preview}</p></div>
                    </article>
                 </div>
                </div>
                </div>);
            }
            this.setState({
                allArticles:reflesh
            })
        });
    }
    getNextpage(e){
        reflesh=[];
        index++;
        url='http://localhost:3000/articles?_page='+index+'&_limit=4';
        this.getRefleshDataFromServer(url);
        e.preventDefault();
        e.stopPropagation();
    }
    getPrePage(e){
        index--;
        url='http://localhost:3000/articles?_page='+index+'&_limit=4';
        this.getRefleshDataFromServer(url);
        e.preventDefault();
        e.stopPropagation();
    }
componentWillMount(){
    if(index==1){
        this.setState({
            disabled:'disabled'
        });
    }
    fetch(url,{method:'get'}).then((res)=>{
        return res.json();
    }).then((res)=>{
        for(let item in res){
            Articles[item]=( <div className="muban" key={res[item].id}>
            <div className="text">
                <article>
                    <div className="article_title"><a>{res[item].title}</a></div>
                    <div className="article_preview_content"><p>{res[item].preview}</p></div>
                </article>
             </div>
            </div>);
        }
        this.setState({
            allArticles:Articles
        })
    });
    Pubsub.subscribe('ArticlesLength',(msg,Artlength)=>{
        this.setState({
            pages:Math.ceil(Artlength/4)
        });
    })
}
    componentWillUnmount(){
        Pubsub.unsubscribe('ArticlesLength')
    }
    render(){
        return(
            <div>
                <div className="main_content">
                    {this.state.allArticles}
                 <aside>
                    <p>第<span id="page_number">{index}</span>页</p>
                    <p>共{this.state.pages}页</p>
                    <div>
                        <button className="previous_page"onClick={this.getPrePage.bind(this)} disabled={this.state.disabled}>上一页</button>
                        <button className="article_next"onClick={this.getNextpage.bind(this)}>下一页</button>
                    </div>
                </aside>
                </div>
            </div>
          
        );
    }

}

ArticlesConpoment.defaultProps = {
};
export default ArticlesConpoment;