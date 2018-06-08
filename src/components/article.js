import React from 'react'
import {Link} from 'react-router-dom'
import Pubsub from 'pubsub-js'

let Articles=[];
let index = 1;
var reflesh;
var url = 'http://localhost:3000/look/'+index;
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
    getRefleshDataFromServer(url){
        return fetch(url,{method:'get',credentials: 'include'}).then((res)=>{
            return res.json();
        }).then((res)=>{
            
            for(let item in res){
                id=res[item].id;
                reflesh[item]=( <div key={res[item].id}>
                <div className="muban" >
                <div className="text">
                    <article>
                        <div className="article_title"><Link to={'/checkArticle/$'+res[item].id}>{res[item].title}</Link></div>
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
        url='http://localhost:3000/look/'+index;
        this.getRefleshDataFromServer(url);
        this.setButtonclick();
        e.preventDefault();
        e.stopPropagation();
    }
    getPrePage(e){
        index--;
        url='http://localhost:3000/look/'+index;
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
    this._isMounted = true
    fetch(url,{method:'get',credentials: 'include'}).then((res)=>{
        return res.json();
    }).then((res)=>{
        for(let item in res){
            id=res[item].id;
            Articles[item]=( <div className="muban" key={res[item].id}>
            <div className="text">
                <article>
                    <div className="article_title"><Link to={'/checkArticle/$'+res[item].id} >{res[item].title}</Link></div>
                    <div className="article_preview_content"><p>{res[item].preview}</p></div>
                </article>
             </div>
            </div>);
        }
        if(this._isMounted){
            this.setState({
                allArticles:Articles
            })
        }
    });
        this.setButtonclick();
        Pubsub.subscribe('ArticlesLengthTo',(msg,a)=>{
          lastpages = Math.ceil(a / 4);
          this.setState({
              pages: lastpages
          });
         });
   }
 
   componentWillUnmount(){
    Pubsub.unsubscribe('ArticlesLengthTo');
    this._isMounted = false
   }
    render(){
        return(
            <div>
                <div className="main_content">
                    {this.state.allArticles}
                 <aside>
                    <p>第<span id="page_number">{index}</span>页共{lastpages}页</p>
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
//fetch 请求处理
// const makeCancelable = (promise) => {
//     let hasCanceled_ = false;
  
//     const wrappedPromise = new Promise((resolve, reject) => {
//       promise.then((val) =>
//         hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
//       );
//       promise.catch((error) =>
//         hasCanceled_ ? reject({isCanceled: true}) : reject(error)
//       );
//     });
  
//     return {
//       promise: wrappedPromise,
//       cancel() {
//         hasCanceled_ = true;
//       },
//     };
//   };
  

ArticlesConpoment.defaultProps = {
};
export default ArticlesConpoment;