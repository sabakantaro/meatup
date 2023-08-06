class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update]

  def show
    render json: { user: @user.as_json }, status: 200
  end

  def update
    if @user.update(user_params)
      render json: { user: @user }, status: 200
    else
      render json: { user: @user.errors }, status: 500
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:image, :name, :profile, :birth_date, :gender)
  end
end
