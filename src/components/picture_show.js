import React from 'react'
import '../styles/pictureShow.css'
class PictureComponent extends React.Component {

    render() {
        return (
            <div className="main_content">
                <div className="album">
                    <div className="pic">
                        <img src="../images/timg.jpg" />
                    </div>
                    <div className="pic_title"><a></a></div>
                </div>
                <div className="album">
                    <div className="pic">
                        <img src="../images/view%20-%20副本.jpg" />
                    </div>
                    <div className="pic_title"><a></a></div>
                </div>
                <div className="album">
                    <div className="pic" id="mytermimg">
                        <img src="images/timg%20(1).jpg" />
                    </div>
                    <div className="pic_title"><a></a></div>
                </div>
            </div>
        );
    }
}

export default PictureComponent;