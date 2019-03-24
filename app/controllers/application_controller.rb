class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  respond_with :html, :json, :js
end
