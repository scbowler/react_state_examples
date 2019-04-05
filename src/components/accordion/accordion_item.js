import React, { Component } from 'react';

class AccordionItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        const { title, content } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="accordion-item-container" onClick={this.toggleOpen}>
                <div className="item-title">{title}</div>
                <div className={`item-content ${isOpen ? 'open' : ''}`}>{content}</div>
            </div>
        );
    }
}

export default AccordionItem;
