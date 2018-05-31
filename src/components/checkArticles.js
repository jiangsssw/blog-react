import React from 'react';
import Pubsub from 'pubsub-js'

class CheckArticles extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articleTitle:'',
            articleContent:''
        }
    }
    componentWillMount(){
        Pubsub.subscribe('checkArticles',(msg,id)=>{
            console.log(id);
            fetch('http://localhost:3000/Aritcles/'+id,{method:'get'}).then((res)=>{
                return res.json();
            }).then((res)=>{
                console.log(res);
                this.setState({
                    articleTitle : res.title,
                    articleContent : res.content
                });
            });
        })
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
                    <div className="article_content"><p>{this.state.articleContent}</p></div>
                </article>
            </div>
        </div>
    </div>);
    }
}

export default CheckArticles;