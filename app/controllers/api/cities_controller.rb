class Api::CitiesController < ApplicationController
  def index
    @cities = City.all 
    render json: @cities

  end

  def create
    @city = City.create!(city_params)

      render json: @city
  end

  def show
    @city = City.find(params[:id])

    render json: @city

  end

  def destroy
    @city = City.find(params[:id]).destroy
    @cities = City.all 
    render json: @cities
  end

  def update
    @city = City.find(params[:id])
    @city.update!(city_params)

    render json: @city
  end

  private
    def city_params
        params.require(:city).permit(:name, :photo_url, :summary, :latitude, :longitude, :state, :country, :nickname, :population, :city_type)
    end
    # the params is connected to the above params
    #private is for allowing a create or update, we will let them change what's inside the parenthesis
  
end