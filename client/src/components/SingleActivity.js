import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

class SingleActivity extends Component {
    state = {
        activity: {},
        comments: [],
    }   
    componentWillMount = () => {
        this.showActivity()
        this.showComment()

    }
    
    showActivity = async () => {
        try {

            const cityId = this.props.match.params.cityId
            //console.log("passed city_url in the param", cityId)
            const activityId = this.props.match.params.id
            //console.log("passed activity_url in the param", activityId)

            //Database call from above, response is the response from the axios call
            const response = await axios.get(`/api/cities/${cityId}/activities/${activityId}`)
           // console.log("response", response)
            // $cityId above is referring to the id above
            // / api / cities /: city_id/activities/: id(.: format)

            this.setState({
                activity: response.data
                // now that we are ready to change the state which was just integers (id's from url)
                // we want to grab the data which was saved in the variable response above and
                // we to change the state of that data because we don't need everything that it gives you like timestamps etc...

            })

        }
            //if that fails print err from console
        catch (err) {
            console.log(err)
        }
    }
    

    showComment = async () => {
        try {

            //When making axios call's grab id's that you need from the url above 
            const cityId = this.props.match.params.cityId
            //console.log("grabbed city_url in the param", cityId)
            const activityId = this.props.match.params.id
            //console.log("grabbed activity_url in the param", activityId)

            const response = await axios.get(`/api/cities/${cityId}/activities/${activityId}/comments`)
            console.log("comment response", response)
            // const response = await axios.get('/api/cities')

            const allComments = response.data

            const oneComment = allComments.filter((comment) => {
                return comment.activity_id == activityId
            })


            this.setState({
                comments: oneComment
            })


        }
        catch (err) {
            console.log(err)
        }
    }

    render() { 
    return (
        <div>
        
         <img className="single-img" src={this.state.activity.photo_url} alt={this.state.activity.name} />
         <div>
         {this.state.activity.summary}
         </div>
         <div>
         {this.state.activity.age_requirement}
         </div>
         <div>
         {this.state.activity.admission_cost}
         </div>
            <br/>
            <br/>
         {
             this.state.comments.map((comment) => {
                 return (
                     comment.body
                 )
             })
         }
         
        </div>
    )
}
}
export default SingleActivity;

