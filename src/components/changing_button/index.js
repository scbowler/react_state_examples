import React, { Component } from 'react';

class ChangingButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            clicks: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    getColor(clicks){
        if(!clicks){
            return 'grey'
        }
        if(clicks < 5){
            return 'blue';
        }
        if(clicks < 10){
            return 'green';
        }
        if(clicks < 15){
            return 'yellow'
        }
        if (clicks < 20) {
            return 'orange'
        }
        if (clicks < 25) {
            return 'red'
        }

        return 'hotpink'
    }

    render(){
        const { clicks } = this.state;

        const style = {
            backgroundColor: this.getColor(clicks)
        }

        return (
            <div>
                <button style={style} className="btn" onClick={this.handleClick}>I Change Colors</button> Click Count: {clicks}
            </div>
        );
    }
}

export default ChangingButton;
