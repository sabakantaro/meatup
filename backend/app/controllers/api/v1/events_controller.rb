class Api::V1::EventsController < ApplicationController
  def index
    render json: { events: Event.includes(:user, :place).as_json }, status: 200
  end

  def show
    event = Event.includes(:user, :place).find_by(id: params[:id])
    return head :not_found unless event.present?

    render json: { event: event.as_json, comments: event.comments.includes(:user).as_json }, status: 200
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

  def event_params
    params.permit(:description, :title, :meeting_datetime, :place_id, :user_id)
  end
end
