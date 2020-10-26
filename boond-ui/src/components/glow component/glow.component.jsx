import React from 'react';
import './glow.style.css';
class Glow extends React.Component{
    render() {
        const {fontSize, text} = this.props;
        return(
            <p><a href={`/`} style={{
                fontSize :`${fontSize}px`
            }}>{text}</a></p>
        )
    }
}
export default Glow;