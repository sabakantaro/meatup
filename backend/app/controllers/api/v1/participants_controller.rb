class Api::V1::ParticipantsController < ApplicationController
  def create
    participant = Participant.create(participants_params)

    if participant.save
      render json: { participant: participant }, status: :ok
    else
      render json: { participant: participant.errors }, status: :internal_server_error
    end
  end

  def destroy
    participant = Participant.find(params[:id])
    participant.destroy
  end

  private

  def participants_params
    params.permit(:event_id, :user_id)
  end
end
