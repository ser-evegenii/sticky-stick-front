import React from 'react';
import ItemInfoTags from "./ItemInfoTags"
import ItemInfoName from "./ItemInfoName";
import InfoInfoMetadata from "./ItemInfoMetadata";

class ItemInfoContainer extends React.Component {


    render() {
        return  (
            <div className="info-container">

                <div className="slider__main">

                    <div className="video-info">

                        <div className="video-info_title">
                            <ItemInfoTags/>
                            <ItemInfoName/>
                            <InfoInfoMetadata/>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default ItemInfoContainer;