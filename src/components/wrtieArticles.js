import React from 'react'
import ReactDom from 'react-dom'
import getTime from '../function/time'


import '../styles/writeArticles.css'
var id;
class WriteArticlesComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            articleTitle : '',
            articlePreview : '',
            articleContent : ''
        }
    }
    componentWillMount(){
        var index = location.href.split('$')[1];
        id = index;
        if(index!=undefined && index!=null){
        var url = 'http://localhost:3000/articles/'+index;
        fetch(url,{method : 'get'}).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({
                articleTitle : res.title,
                articlePreview : res.preview,
                articleContent : res.content
            });
            var title = ReactDom.findDOMNode(this.refs.writeTitle),
            writePreview = ReactDom.findDOMNode(this.refs.writePreview),
            writeContet = ReactDom.findDOMNode(this.refs.writeContet);
            title.value= this.state.articleTitle;
            writePreview.value = this.state.articlePreview;
            writeContet.value = this.state.articleContent;
        })
    }
    }
    componentDidMount(){
       
    }


    //点击提交数据
    submitClick(e){
        var title = ReactDom.findDOMNode(this.refs.writeTitle),
        writePreview = ReactDom.findDOMNode(this.refs.writePreview),
        writeContet = ReactDom.findDOMNode(this.refs.writeContet);
        var subTitle = title.value,
            subPreview = writePreview.value,
            subContent = writeContet.value;
            if(id==undefined) {
                var url = 'http://localhost:3000/articles/';
                var type = 'post';
            }else{
                var url = 'http://localhost:3000/articles/'+id;
                var type = 'put';
            }
            var data = {
                'title': subTitle,
                'preview' : subPreview,
                'content' : subContent,
                'time' : getTime()
            }
            var obj ={
                method : type,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            }
            
            fetch(url,obj).then((res)=>{
                return res.json();
            }).then((res)=>{
                var writeT= ReactDom.findDOMNode(this.refs.writeText);
                var fish = ReactDom.findDOMNode(this.refs.fishing);
                writeT.style.display = 'none';
                fish.style.display = 'block';
                return res;
            });
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        return ( <div className="main_content">
        <div className="write_text" ref='writeText'>
            <article>
                <h4>请输入文章标题</h4>
                <input className="write_article_title" ref='writeTitle'/>
                <h4>预览内容</h4>
                <textarea className="write_article_preview_content" ref='writePreview'></textarea>
                <h4>输入内容</h4>
                <textarea className="write_content" ref='writeContet'>
                </textarea>
            </article>
            <button className="subbit" onClick={this.submitClick.bind(this)}>提交</button>
        </div>
        <div className="fished" ref='fishing'>
            <a>OK,恭喜你提交成功</a>
        </div>
    </div>);
    }
}

export default WriteArticlesComponent;