import React from 'react';

class SliderControl extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this.click = this.click.bind(this);
    }

    click() {
        this.props.showSlider(true)
        this.props.swipe(this.props.direction)
    }

    render() {
        return  (
            <a href="#" onClick={() => this.click()} className="slider__control" data-slide={this.props.direction}/>
        );
    }
}

export default SliderControl;


//                                <ButtonComponent swipe = {context.swipeRequest}
//                                                  directionSymbol = "&laquo;" direction = "previous"
//                                                  showSlider = {this.showSlider}/>
//#####
//            <div className="swipeBtnBlock">
//                 <button className="swipeBtn"
//                         onClick={() => this.click()} >
//                     <img src={arrow} className={this.renderElement()} alt="like" />
//                 </button>
//             </div>

