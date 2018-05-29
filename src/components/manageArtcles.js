import React from 'react'

class ManageArtclesComponent extends React.Component {

    render() {
        return (
            <div className="main_content">
                <div className="write_article"><button><a>写文章</a></button></div>
                <div className="text">
                    <div className="Manage_articles">
                        <article>
                            <label onclick="getArtid('$$id$$')"><input type="button" value="修改" /></label>
                            <label onclick="deleteArticles('$$id$$')"><input type="button" value="删除" /></label><span className="isDelete"></span>
                            <div className="article_title"><a onclick="abc('$$id$$')">$$title$$</a></div>
                            <div className="article_preview_content"><p>$$preview$$</p></div>
                        </article>
                    </div>
                </div>
                <aside>
                    <p>第<span id="page_number"></span>页</p>
                    <div>
                        <button className="article_next">上一页</button>
                        <button className="previous_page">下一页</button>
                    </div>
                </aside>
            </div>
        );
    }
}

export default ManageArtclesComponent;