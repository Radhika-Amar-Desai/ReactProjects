import React, {Component} from 'react';

class Notification extends Component{
    state = {
        count : 0
    }

    AddCount = () => {
        this.setState (
            {count : this.state.count + 1}
        )
    }

    render(){
        return(
            <>
                <button onClick = {this.AddCount}>
                    Click me
                </button>
                <div>
                    {this.props.text} 
                </div>
                <div>
                Counter : {this.state.count}
                </div>
            </>
        )
    }

}

export default Notification;