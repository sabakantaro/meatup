class Api::V1::Auth::SessionsController < ApplicationController
  def index
    if api_v1_user_signed_in?
      render json: { status: 200, current_user: current_api_v1_user }
    else
      render json: { status: 500, message: 'ユーザーが存在しません' }
    end
  end
end
