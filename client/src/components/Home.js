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
                <div>

                    {this.state.cities.map(city => (
                        <Link to={`/cities/${city.id}`}>
                            <city key={city.id}>
                                <img src={city.photo_url} alt="picture of city" className="city-img" />
                                <city-name>{city.name}</city-name>
                            </city>
                        </Link>
                    ))}
                </div>
            </Background>
        )
    }
}

export default Home

    const city = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: row;
    `

const Background = styled.div`
 position: fixed;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: -webkit-linear-gradient(#fff, rgba(255, 255, 255, 0));
  background-image: -moz-linear-gradient(#fff, rgba(255, 255, 255, 0));
  background-image: -o-linear-gradient(#fff, rgba(255, 255, 255, 0));
  background-image: -ms-linear-gradient(#fff, rgba(255, 255, 255, 0));
  background-image: linear-gradient(#fff, rgba(255, 255, 255, 0));
  -webkit-background-size: 100% 900px;
  -moz-background-size: 100% 900px;
  background-size: 100% 900px;
  background-repeat: no-repeat;
  font-size: 62.5%;
  color: #6f7c82;
  font-family: 'Whitney SSm A', 'Whitney SSm B', Helvetica, Arial;
  font-weight: 400;
  font-style: normal;
  overflow-x: hidden;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #0e295e;
  background-image: -webkit-radial-gradient(circle farthest-side at right bottom, #274889 0, #274889 34%, #0e295e 100%);
  background-image: -moz-radial-gradient(circle farthest-side at right bottom, #274889 0, #274889 34%, #0e295e 100%);
  background-image: -o-radial-gradient(circle farthest-side at right bottom, #274889 0, #274889 34%, #0e295e 100%);
  background-image: -ms-radial-gradient(circle farthest-side at right bottom, #274889 0, #274889 34%, #0e295e 100%);
  background-image: radial-gradient(circle farthest-side at right bottom, #274889 0, #274889 34%, #0e295e 100%);
}

div#main {
  padding: 0 10px;

`
