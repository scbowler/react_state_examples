import React from 'react';
import AccordionItem from './accordion_item';
import './accordion_style.scss'

export default props => {
    const items = props.content.map((item, index) => {
        return <AccordionItem key={index} title={item.title} content={item.content}/>
    });

    return (
        <div className="accordion">
            {items}
        </div>
    );
}
