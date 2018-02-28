class Api::ActivitiesController < ApplicationController
  
    def index
    @activities = Activity.all

    render json: @activities

    end

    def show
        # @city = City.find(param[:city_id])
        @activity = Activity.find(params[:id])

        # @response = {city: @city, activity: @activity}

        render json: @activity
    end

end