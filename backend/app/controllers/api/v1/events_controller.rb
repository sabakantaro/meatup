class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: %i[destroy]
  def index
    render json: Event.all, status: 200
  end

  def create
    event = Event.new(event_params)
    event.save
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
  end

  private

    def set_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.permit(:description, :img)
    end

  private
  def test_events
    [
      {
        description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
        img: "https://links.papareact.com/xqj",
        lat: 51.5421655,
        location: "Private room in center of London",
        long: -0.0022275,
        price: "£30 / night",
        star: 4.73,
        title: "Anytime fitness Olympic Village, Vancouver",
        total: "£99999 total",
      }
    ]
  end
end