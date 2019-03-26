class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  respond_to :html, :json, :js
end
