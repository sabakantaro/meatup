class Api::V1::PlacesController < ApplicationController
  def index
    places = Place.all.as_json
    render json: { places: places }, status: 200
  end

  def create
    place = Place.new(place_params)
    if place.save
      head 200
    else
      head 500
    end
  end

  def destroy
    place = Place.find_by(id: params[:id])
    if place.destroy
      head 200
    else
      head 500
    end
  end

  private

  def place_params
    params.permit(:latitude, :longitude, :location, :image)
  end
end
