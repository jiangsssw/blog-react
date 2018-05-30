import React from 'react'

let Articles=[]
var index = 1;
class ArticlesConpoment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allArticles:''
        
        }
    }
    getNextpage(e){
        index++;
        this.setState({
            allArticles:''
        });
        
        fetch('http://localhost:3000/articles?_page='+index+'&_limit=4',{method:'get'}).then((res)=>{
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
        e.preventDefault();
        e.stopPropagation();
    }
    getPrePage(e){
        index--;
        e.preventDefault();
        e.stopPropagation();
    }
componentWillMount(){
    fetch('http://localhost:3000/articles?_page='+index+'&_limit=4',{method:'get'}).then((res)=>{
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
}
    render(){
        return(
            <div>
                <div className="main_content">
                    {this.state.allArticles}
                 <aside>
                    <p>第<span id="page_number">{index}</span>页</p>
                    <div>
                        <button className="previous_page"onClick={this.getPrePage.bind(this)}>上一页</button>
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