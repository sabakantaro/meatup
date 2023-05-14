class Api::V1::PlacesController < ApplicationController
  before_action :set_place, only: %i[destroy]
  def index
    render json: { places: Place.all }, status: 200
  end

  def create
    place = Place.new(place_params)
    place.save
  end

  def destroy
    place = Place.find(params[:id])
    place.destroy
  end

  private

  def set_place
    @place = Place.find(params[:id])
  end

  def place_params
    params.permit(:latitude, :longitude, :location, :image)
  end
end
