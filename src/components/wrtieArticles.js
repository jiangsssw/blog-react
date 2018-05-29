import React from 'react'
import '../styles/writeArticles.css'
class WriteArticlesComponent extends React.Component {

    render() {
        return ( <div className="main_content">
        <div className="write_text">
            <article>
                <h4>请输入文章标题</h4>
                <input className="write_article_title" />
                <h4>预览内容</h4>
                <textarea className="write_article_preview_content"></textarea>
                <h4>输入内容</h4>
                <textarea className="write_content">
                </textarea>
            </article>
        </div>
        <button className="subbit">提交</button>
        <div className="fished">
            <a>OK,恭喜你提交成功</a>
        </div>
    </div>);
    }
}

export default WriteArticlesComponent;