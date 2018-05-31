import React from 'react'
import Pubsub from 'pubsub-js'
import {Link} from 'react-router-dom'

let Articles=[];
let index = 1;
var reflesh;
var url = 'http://localhost:3000/articles?_page='+index+'&_limit=4';
var lastpages;
var id;
class ArticlesConpoment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allArticles:'',
            pages:'',
            Predisabled:'',
            Nextdisabled:''
        }
    }
    checkArticles(id,e){
        console.log(id);
        Pubsub.publish('checkArticles',id);
        
        e.preventDefault();
        e.stopPropagation();
    }
    getRefleshDataFromServer(url){
        return fetch(url,{method:'get'}).then((res)=>{
            return res.json();
        }).then((res)=>{
            for(let item in res){
                id=res[item].id;
                console.log(id);
                reflesh[item]=( <div key={res[item].id}>
                <div className="muban" >
                <div className="text">
                    <article>
                        <div className="article_title"><Link to='/checkArticle' onClick={this.checkArticles.bind(this,id)}>{res[item].title}</Link></div>
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
        this.setButtonclick();
        e.preventDefault();
        e.stopPropagation();
    }
    getPrePage(e){
        index--;
        url='http://localhost:3000/articles?_page='+index+'&_limit=4';
        this.getRefleshDataFromServer(url);
        this.setButtonclick();
        e.preventDefault();
        e.stopPropagation();
    }
    setButtonclick(){
        if(index==1){
            this.setState({
                Predisabled:'disabled'
            })}else{
            this.setState({
                Predisabled:''
            });
        }
        if(index==lastpages){
           this.setState({
               Nextdisabled:'disabled'
           })
        } else{
            this.setState({
                Nextdisabled:''
            })
        }
    }
  componentWillMount(){
      this.setButtonclick();
     
    fetch(url,{method:'get'}).then((res)=>{
        return res.json();
    }).then((res)=>{
        for(let item in res){
            id=res[item].id;
            console.log(id);
            Articles[item]=( <div className="muban" key={res[item].id}>
            <div className="text">
                <article>
                    <div className="article_title"><Link to='/checkArticle' onClick={this.checkArticles.bind(this,id)}>{res[item].title}</Link></div>
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
        lastpages=Math.ceil(Artlength/4);
        this.setState({
            pages:lastpages
        });
    });
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
                    <p>第<span id="page_number">{index}</span>页共{this.state.pages}页</p>
                    <div>
                        <button className="previous_page"onClick={this.getPrePage.bind(this)} disabled={this.state.Predisabled}>上一页</button>
                        <button className="article_next"onClick={this.getNextpage.bind(this)} disabled={this.state.Nextdisabled}>下一页</button>
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