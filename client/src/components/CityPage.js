// rcc
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default class CityPage extends Component {
    state = {
        city: {},
        activities: [],
    }
    componentWillMount = () => {
        this.showCity()

    }

    showCity = async () => {
        try {
            //Aysnc call to the database, cityId will be the id from above url that belong's to that city
            //params will take the i.d from above url: city.id match it
            const cityId = this.props.match.params.id

            //Database call
            const response = await axios.get(`/api/cities/${cityId}`)
            // await tell's it to wait to get cityId info first and then set the state
            // cityId is getting the params from the url and passing it down and saving
            // to the const below and looking it up through the cityId

            //Database Call
            const allActivities = await axios.get(`/api/activities/index`)
            console.log(allActivities)
            // save all activities to the above const from api/activities
            const specificActivity = allActivities.data
            // get all the activities data and save it to the const

            const oneActivity = specificActivity.filter((activity) => {
                return activity.city_id == cityId
                // get the specificActivity and filter it to match the current city-id, to loop through an array
            })

            console.log("Activities went through", allActivities)

            this.setState({
                city: response.data,
                //(this.setState is when you are ready to make the change of the state)
                activities: oneActivity,
            })
        }
        catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <Background>
            <div className="container">
                <div className="city-container">
                    <div className="city-preview-2" >

                        <img className="city-img-2" src={this.state.city.photo_url} alt={this.state.city.name} />
                        <div className="city-name">
                            {this.state.city.name}
                        </div>
                    </div>
                 
                    <div className="city-stats-text-2">
                    {this.state.city.summary}   
                    </div>
                    <div>
                    </div>
                    <buttonDiv>
                        <Link to="/"><citiesButton type="button">Back to Cities</citiesButton></Link>
                    </buttonDiv>
                </div>

                <div className= "city-container">
                    {this.state.activities.map(activity => (
                        <Link to={`/cities/${activity.city_id}/activities/${activity.id}`}>

                            <city key={activity.id}>
                            
                                <div className="city-box-2"> 
                            
                                <img src={activity.photo_url} onClick alt="picture of city" className="city-img-3" />
                                <div className="city-name-2">{activity.name}</div>
                                    </div>

                            </city>
                        </Link>

                    ))}
                </div>


            </div>
            </Background>


        )
    }
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(105, 155, 200);
  background: -moz-radial-gradient(
    top left,
    ellipse cover,
    rgba(105, 155, 200, 1) 0%,
    rgba(181, 197, 216, 1) 57%
  );
  background: -webkit-gradient(
    radial,
    top left,
    0px,
    top left,
    100%,
    color-stop(0%, rgba(105, 155, 200, 1)),
    color-stop(57%, rgba(181, 197, 216, 1))
  );
  background: -webkit-radial-gradient(
    top left,
    ellipse cover,
    rgba(105, 155, 200, 1) 0%,
    rgba(181, 197, 216, 1) 57%
  );
  background: -o-radial-gradient(
    top left,
    ellipse cover,
    rgba(105, 155, 200, 1) 0%,
    rgba(181, 197, 216, 1) 57%
  );
  background: -ms-radial-gradient(
    top left,
    ellipse cover,
    rgba(105, 155, 200, 1) 0%,
    rgba(181, 197, 216, 1) 57%
  );
  background: radial-gradient(
    ellipse at top left,
    rgba(105, 155, 200, 1) 0%,
    rgba(181, 197, 216, 1) 57%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#699bc8', endColorstr='#b5c5d8',GradientType=1 );
`;