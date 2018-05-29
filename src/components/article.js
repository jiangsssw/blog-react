import React from 'react'

class ArticlesConpoment extends React.Component{

    render(){
        return(
            <div>
                <div className="main_content">
                  <div className="muban">
                    <div className="text">
                        <article>
                            <div className="article_title"><a>$$title$$</a></div>
                            <div className="article_preview_content"><p>$$content$$</p></div>
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
            </div>
          
        );
    }

}

ArticlesConpoment.defaultProps = {
};
export default ArticlesConpoment;