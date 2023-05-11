class Api::V1::EventsController < ApplicationController
  def index
    render json: { events: test_events }, status: 200
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
