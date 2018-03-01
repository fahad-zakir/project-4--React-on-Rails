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
   <Background> 
                <h1>FamTime</h1>
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
        )
    }
}

export default Home

const Background = styled.div`
 
`
