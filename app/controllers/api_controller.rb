class ApiController < ActionController::API
  include ActionController::Helpers

  #include ActionController::MimeResponds

  #respond_with :html, :json, :js

  def fallback_index_html
    render :file => 'public/index.html'
  end


  def current_member
    @current_member ||= Member.find(session[:member_id]) if session[:member_id]
  end
  helper_method :current_member
  def authorize
    render json: {}, status: 401 unless current_member

    if current_member then render json:@current_member
  end

end

end