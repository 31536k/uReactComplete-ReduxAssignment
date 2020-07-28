import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux'

class Persons extends Component {
    /*
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }
    */

    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddPerson('Max', Math.floor( Math.random() * 40))} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = reducer => {
    return {
        persons: reducer.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (name, age) => dispatch({type: 'ADD', name:name, age:age}),
        onDeletePerson: (id) => dispatch({type: 'DELETE', personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);