class Api::V1::ParticipantsController < ApplicationController
  def create
    participant = Participant.create(participants_params)
    participant.create_chatroom

    if participant.save
      participant.notify
      render json: { participant: participant }, status: :ok
    else
      render json: { participant: participant.errors }, status: :internal_server_error
    end
  end

  def destroy
    participant = Participant.find(params[:id])
    if participant.destroy
      render status: :ok
    else
      render status: :internal_server_error
    end
  end

  private

  def participants_params
    params.permit(:event_id, :user_id)
  end
end
