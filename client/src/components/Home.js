import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Home extends Component {
    state = {
        error: '',
        cities: []
    }
    componentWillMount() {
        this.fetchCities();
    }

    fetchCities = async () => {
        try {
            const response = await axios.get('/api/cities');
            console.log('succesfully grabbed api data', response)
            await this.setState({ cities: response.data });
            return response.data;
            // Response variable is storing data from api/cities, it uses axios to makes a call to get cities from the api
            // save cities to const response, (await) tell's it to wait to get cities array first and then set the state
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <div className="new">
   <Background> 
            <h1 className="title">FamTime</h1>
                <div className="city-preview">
                    {this.state.cities.map(city => (
                    <Link to={`/cities/${city.id}`}>
                        <div key={city.id}  >
                        <div className="city-box"> 
                            <img src={city.photo_url} alt="picture of city" className="city-img" />
                            <div >{city.name}</div>
                                </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </Background>
            </div>
        )
    }
}

export default Home

const Background = styled.div`

 
background: rgb(105,155,200);
background: -moz-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%, rgba(181,197,216,1) 57%);
 background: -webkit-gradient(radial, top left, 0px, top left, 100%, color-stop(0%,rgba(105,155,200,1)), color-stop(57%,rgba(181,197,216,1)));
 background: -webkit-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 background: -o-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 background: -ms-radial-gradient(top left, ellipse cover, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 background: radial-gradient(ellipse at top left, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#699bc8', endColorstr='#b5c5d8',GradientType=1 );

`
