
'use strict';

var React = require('react');
import {withRouter} from 'react-router';

class MyComponentWithRouter extends React.Component {

    constructor() {

        super();
    }

    render() {

        return <div>
            <p id="copy">{this.state.copy}</p>
        </div>;
    }

    componentWillMount() {

        this.setState({copy: "I will displayed"});
    }
}

module.exports = withRouter(MyComponentWithRouter);