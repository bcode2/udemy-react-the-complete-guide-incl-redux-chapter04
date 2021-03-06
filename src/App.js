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

    deletePerson = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons:persons});
    }

    switchNameHandler = (name) => {
        this.setState({
            persons: [
                {name: name, age: 34},
                {name: "Carlos2", age: 6}
            ]
        })
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
            borderRadius: '15px'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                            return <Person
                                clickDelete={()=>this.deletePerson(index)}
                                name={person.name}
                                age={person.age}
                            />
                        }
                    )
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Working with Lists and Conditionals</h1>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Show or not the person list
                </button>
                <p>This is really working</p>
                <div>
                    {this.state.showPersons ? persons : null}
                </div>
            </div>
            //React.createElement('div', {className:'App'},React.createElement('h1',null,"Hello every one")));
        )
    }
}

export default App;
