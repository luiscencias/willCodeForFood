class ApplicationController < ActionController::Base


  respond_to :html, :json, :js

  def fallback_index_html
    render :file => 'public/index.html'
  end

end
