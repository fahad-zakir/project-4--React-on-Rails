import React, { Component } from 'react'
import styled from 'styled-components'

class SingleActivity extends Component {

    state = {
        activityToChange: {

        },
        pageNotReady: true,
        editActivityFormShowing: false
    }

    toggleEditActivityForm = () => {
        const editActivityFormShowing = !this.state.editActivityFormShowing
        this.setState({
            editActivityFormShowing
        })
    }

    componentWillMount = () => {
        console.log(this.props.activity)
        this.setState({ activityToChange: this.props.activity, pageNotReady: false })
    }

    handleEditActivityChange = (event) => {
        console.log(this.state.activityToChange)

        const newActivity = { ...this.state.activityToChange }
        newActivity[event.target.name] = event.target.value

        this.setState({ activityToChange: newActivity })
    }
    updateActivity = (event) => {
        event.preventDefault()
        this.props.editActivity(this.state.activityToChange)
        this.toggleEditActivityForm()
    }

    handleClick = () => {

        if (window.confirm(`Are you sure you want to delete ${this.props.title}?`)) {
            this.props.deleteActivity(this.props.activity.id)
        }
    }

    render() {

        return (
            <div>
                {/* {this.state.pageNotReady ? */}
                {/* <div>test true </div> : */}
                <div >
                    <img className="ImageActivity" width="300" src={this.props.activity_photo} alt="" />
                    <div className="activity-title">{this.props.title}</div>
                    <div className="activity-text">{this.props.body}</div>
                    <div>
                        <button className="delete" type="submit" onClick={this.handleClick}>Delete</button>

                        <button className="edit" onClick={this.toggleEditActivityForm}>
                            Edit Activity
                            </button>
                    </div>
                    <div>
                        <div className="activity-text">
                            {this.state.editActivityFormShowing ?
                                <form onSubmit={this.updateActivity}>

                                    <div>
                                        <label htmlFor="title">Title: </label>
                                        <input onChange={this.handleEditActivityChange} name="title" type="text" value={this.state.activityToChange.title} />
                                    </div>

                                    <div>
                                        <label htmlFor="body">Description: </label>
                                        <input onChange={this.handleEditActivityChange} name="body" type="text" value={this.state.activityToChange.body} />
                                    </div>
                                    <div>
                                        <label htmlFor="body">Photo URL:</label>
                                        <input onChange={this.handleEditActivityChange} name="activity_photo" type="text" value={this.state.activityToChange.activity_photo} />
                                    </div>
                                    <div>
                                        <input className="edit" type="submit" value="Submit" />
                                    </div>

                                </form>
                                : null
                            }

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SingleActivity;

