class Api::V1::NotificationsController < ApplicationController
  def index
    return head 500 unless current_api_v1_user.present?

    notifications = Notification.where(user_id: current_api_v1_user.id)
    render json: { notifications: notifications }, status: 200
  end

  def update
    notification = Notification.find(params[:id])
    if notification.update(is_checked: true)
      head 200
    else
      head 500
    end
  end
end
