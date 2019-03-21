class ShopController < ActionController::API
  respond_to :js, :html, :json
  def create
    @fname = params[:fname]
    @lname = params[:lname]
    @email = params[:email]
    @subject = params[:subject]


    UserMailer.confirmation_email(@email, @subject).deliver_now
    UserMailer.notice_email(@email, @subject, @fname, @lname).deliver_now
    respond_with do |format|
      msg = {:status => "success!", :message => "hello", :response => @fname}
      format.json {render :json => msg}
    end
  end


end
