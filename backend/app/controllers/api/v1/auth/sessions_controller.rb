class Api::V1::Auth::SessionsController < ApplicationController
  def index
    if api_v1_user_signed_in?
      render json: { current_user: current_api_v1_user.as_json }, status: 200
    else
      render json: { message: 'User does not exist' }, status: 404
    end
  end
end
