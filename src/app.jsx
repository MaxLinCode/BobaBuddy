import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName: "Maneesh",
    lastName: "Tewani"
}
    
const nameElement = <h1>Hello, {formatName(user)}</h1>;

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Welcome name="Maneesh Tewani" />
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


ReactDOM.render(
    <Clock />,
    document.getElementById("root")
);