class Api::V1::EventsController < ApplicationController
  def index
    events = Event.includes(:user, :place).as_json
    render json: { events: events }, status: 200
  end

  def show
    event = Event.includes(:user, :place).find_by(id: params[:id])
    return head 404 if event.blank?

    comments = event.comments.includes(:user).as_json
    render json: { event: event.as_json, comments: comments }, status: 200
  end

  def create
    event = Event.new(event_params)
    if event.save
      head 200
    else
      head 500
    end
  end

  def destroy
    event = Event.find(params[:id])
    if event.destroy
      head 200
    else
      head 500
    end
  end

  private

  def event_params
    params.permit(:description, :title, :meeting_datetime, :place_id, :user_id)
  end
end
