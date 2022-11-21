import React, { Component } from 'react';




class Results extends Component {
    render() {
        let choice;
        if(this.props.SwitchChoice === true)
        {
            choice = "Switch Choice"
        }
        else
        {
            choice = "Stay with Choice"
        }
        return (
            <div className='marginTop'>
                <label className='choice'>{choice}</label> <label className='Wins'> Wins {this.props?.data?.data?.wins}</label> <label className='Loses'> Losses {this.props?.data?.data?.loss}</label>
            </div>
        );
    }
}

export default Results;