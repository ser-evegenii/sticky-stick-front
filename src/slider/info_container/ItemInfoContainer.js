import React from 'react';
import ItemInfoTags from "./ItemInfoTags"
import ItemInfoName from "./ItemInfoName";
import ItemInfoMetadata from "./ItemInfoMetadata";
import ItemInfoRating from "./ItemInfoRating"

class ItemInfoContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return  (
            <div className="info-container">

                <div className="slider__main">

                    <div className="video-info">

                        <div className="video-info_title">
                            <ItemInfoTags/>
                            <ItemInfoName name={this.props.name}/>
                            <ItemInfoMetadata/>
                        </div>

                    </div>

                    <ItemInfoRating likes={this.props.likes}
                                    dislikes={this.props.dislikes}
                                    updateRating={this.props.updateRating}
                                    currentId = {this.props.currentId}/>

                </div>

            </div>
        );
    }
}

export default ItemInfoContainer;