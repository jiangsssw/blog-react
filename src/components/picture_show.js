import React from 'react'
import '../styles/pictureShow.css'
class PictureComponent extends React.Component {

    render() {
        return (
            <div className="main_content">
                <div className="album">
                    <div className="pic">
                        <img src={require('../images/timg.jpg')} />
                    </div>
                    <div className="pic_title"><a></a></div>
                </div>
                <div className="album">
                    <div className="pic">
                        <img src={require('../images/view2018.jpg')} />
                    </div>
                    <div className="pic_title"><a></a></div>
                </div>
                <div className="album">
                    <div className="pic" id="mytermimg">
                        <img src={require('../images/timg2018.jpg')} />
                    </div>
                    <div className="pic_title"><a></a></div>
                </div>
            </div>
        );
    }
}

export default PictureComponent;