class ApiController < ActionController::API
  #include ActionController::MimeResponds

  #respond_with :html, :json, :js

  def fallback_index_html
    render :file => 'public/index.html'
  end
end
