class ApplicationController < ActionController::Base


  respond_to :html, :json, :js

  def fallback_index_html
    #redirect_to 'public/index.html'
    #render json: @member
    render :file => 'public/index.html'
  end

  def current_member
    @current_member ||= Member.find(session[:member_id]) if session[:member_id]
  end
  helper_method :current_member

  def authorize
    redirect_to'http://localhost:5000/login' unless current_member
    render json:true
  end


end
