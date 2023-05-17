class ApplicationController < ActionController::API
  include DeviseHackFakeSessionConcern
  include ActionController::Helpers
  include DeviseTokenAuth::Concerns::SetUserByToken
  helper_method :current_user, :user_signed_in?
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:account_update, keys: %i[name image])
  end
end
