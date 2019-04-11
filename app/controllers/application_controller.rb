class ApplicationController < ActionController::Base


  respond_to :html, :json, :js

  def fallback_index_html
    #redirect_to 'public/index.html'
    #render json: @member
    render :file => 'public/index.html'
  end

end
