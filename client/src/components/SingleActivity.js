import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NewCommentForm from './NewCommentForm'

class SingleActivity extends Component {
    state = {
        activity: {},
        comments: [],
        newCommentFormShowing: false
    }   
    //Component will mount will say before the page runs, run the functions below like showActivity and showComment
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
    toggleNewCommentForm = () => {
        const newCommentFormShowing = !this.state.newCommentFormShowing
        this.setState({
            newCommentFormShowing
        })
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
        <Background>
        <div>
        
         <img className="single-img" src={this.state.activity.photo_url} alt={this.state.activity.name} />
         <div>
         {this.state.activity.summary}
         </div>
         <div>
         {this.state.activity.age_requirement}
         </div>
         <div>
         <h3 className="cost">Cost</h3>
                   
         {this.state.activity.admission_cost}
         </div>
            <buttonDiv>
                <button type="button" onClick={this.toggleNewCommentForm}>Add New</button>
            </buttonDiv>

            {
                    this.state.newCommentFormShowing ? <NewCommentForm /> : null
            }
            
            
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
        </Background>
    )
}
}
export default SingleActivity;

const Background = styled.div`

  position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
background: rgb(105,155,200);
background: -moz-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%, rgba(181,197,216,1) 57%);
 background: -webkit-gradient(radial, top left, 0px, top left, 100%, color-stop(0%,rgba(105,155,200,1)), color-stop(57%,rgba(181,197,216,1)));
 background: -webkit-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 background: -o-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 background: -ms-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 background: radial-gradient(ellipse at top left, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#699bc8', endColorstr='#b5c5d8',GradientType=1 );

`

