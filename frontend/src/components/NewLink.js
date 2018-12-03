import React, { Component } from 'react'
import './NewLink.css'

export default class NewLink extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            URL: "",
        }
    }

    onChangeTittle = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    onChangeURL = (e) => {
        this.setState({
            URL: e.target.value,
        })
    }
    
    render() {
        let { title, URL } = this.state; 
        return (
            <div className="new-link">
                <form>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" value={title} onChange={this.onChangeTittle}/>
                    </div>
                    <div className="field">
                        <label>URL</label>
                        <input type="text" value={URL} onChange={this.onChangeURL}/>
                    </div>
                    <button>Add Link</button>

                </form>
            </div>
        )
    }
}
