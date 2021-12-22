import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Robin Hood Sr'
        }
    }

    greetParent = child => {
        alert(`Hello ${this.state.parentName} from ${child}`);
    }
    
    render() {
        return (
            <>
                <ChildComponent greetHandler={this.greetParent} />
            </>
        )
    }
}

export default ParentComponent
