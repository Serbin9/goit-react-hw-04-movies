import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class Loading extends Component {
    state={};
    render() {
        return (
            <div>
                <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000}/>
            </div>
        );
    }
}

export default Loading;