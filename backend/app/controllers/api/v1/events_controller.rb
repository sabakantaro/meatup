class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: %i[destroy]
  def index
    render json: { events: Event.includes(:user, :place).as_json() }, status: 200
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
    params.permit(:description, :title, :meeting_datetime, :place_id, :user_id)
  end
end
