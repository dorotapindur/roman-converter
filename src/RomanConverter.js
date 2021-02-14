import React from 'react';
import toRoman from './toRoman';

class RomanConverter extends React.Component {
    state = {
        roman: null,
    }
    handleChange = (event) => {
        const arabic = Math.round(event.target.value);
       
        this.setState({roman: toRoman(arabic)});
    }
    render() {
        return (
            <div className="wrapper">
                <label>Arabic: <input className="input" onChange={this.handleChange} type="number"></input></label>
                <p>Roman: {this.state.roman ? this.state.roman : 'none'}</p>
            </div>
        )
    }
}

export default RomanConverter;