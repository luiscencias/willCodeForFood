class ApiController < ActionController::API
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
    render json:false unless current_member
    render json:true
  end

end
