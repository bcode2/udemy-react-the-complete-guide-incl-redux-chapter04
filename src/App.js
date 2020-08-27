import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {



    state = {
        persons: [
            {name: "Carlos", age: 34},
            {name: "Carlos2", age: 36}
        ],
        otherStates: 'other sates  for the object state'
    }

    switchNameHandler = (name) => {
        this.setState({
            persons: [
                {name: name, age: 34},
                {name: "Carlos2", age: 6}
            ]
        })
        console.log(this.state.persons);
    }
    nameChangedHandler = (event) => {
        this.setState({
                persons: [
                    {name: "Max", age: 34},
                    {name: event.target.value, age: 16}

                ]
            }
        )
    }

    render() {
        const style={
            backgroundColor:'yellow',
            border:'10px'
        }
        return <div className="App">
            <h1>Hi this is  my first react application</h1>
            <button
                style={style}
                onClick={this.switchNameHandler}>Click on me</button>
            <p>This is really working</p>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, "LUCIFER")}
                changed={this.nameChangedHandler}

            />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        </div>
        //React.createElement('div', {className:'App'},React.createElement('h1',null,"Hello every one")));
    }
}

export default App;
