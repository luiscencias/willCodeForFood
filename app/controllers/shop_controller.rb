class ShopController < ActionController::API
  respond_to :js, :html, :json
  def create
    @fname = params[:fname]
    @lname = params[:lname]
    @email = params[:email]
    @subject = params[:subject]

    puts @fname
    puts @lname
    UserMailer.confirmation_email(@email, @subject).deliver_now
    respond_with do |format|
      msg = {:status => "success!", :message => "hello", :response => @fname}
      format.json {render :json => msg}
    end
  end


end
