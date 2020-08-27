import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {


    state = {
        persons: [
            {name: "Carlos", age: 34},
            {name: "Carlos2", age: 36}
        ],
        otherStates: 'other sates  for the object state',
        showPersons: false
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

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }



    render() {
        const style = {
            backgroundColor: 'gray',
            border: '5px solid black',
            borderRadius:'15px'
        }

        let person = null;
        if (this.state.showPersons) {
            person = (
                <>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, "LUCIFER")}
                        changed={this.nameChangedHandler}
                    />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                </>
            );
        }
        return <div className="App">
            <h1>Working with Lists and Conditionals</h1>
            <button
                style={style}
                onClick={this.togglePersonHandler}>Show or not the  person list
            </button>
            <p>This is really working</p>

        <div>
            { this.state.showPersons? person:null         }
        </div>
        </div>
        //React.createElement('div', {className:'App'},React.createElement('h1',null,"Hello every one")));
    }
}

export default App;
