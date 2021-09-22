import React, { Component } from 'react'

export default class FormComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "",
        }
    }

    changeLocation = (e) => {
        this.setState({
            location: e.target.value,
        })
    }

    render() {
        const { weatherMethod } = this.props;
        return (
            <div>
                <form onSubmit={(e)=> weatherMethod(e, this.state.location)}>
                    <input onChange={this.changeLocation} type="text" name="city" placeholder="Город" />
                    <button>Получить погоду</button>
                </form>
            </div>
        )
    }
}
