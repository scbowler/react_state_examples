import React, { Component } from 'react';
import './modal_style.scss';

class Modal extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close(){
        this.setState({
            isOpen: false
        });
    }

    open(){
        this.setState({
            isOpen: true
        });
    }

    render(){
        const { isOpen } = this.state;
        const { content = '' } = this.props;

        if(isOpen){
            return (
                <div className="modal">
                    <div className="modal-container">
                        <h1 className="modal-header">My Cool Modal</h1>
                        <div className="modal-content">
                            {content}
                        </div>
                        <div className="modal-actions">
                            <button onClick={this.close} className="btn">Okay</button>
                        </div>
                    </div>
                </div>
            )
        }

        return <button className="btn" onClick={this.open}>Open Modal</button>
    }
}

export default Modal;
