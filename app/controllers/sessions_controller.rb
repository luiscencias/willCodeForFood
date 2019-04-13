class SessionsController < ApiController
  def create
    member = Member.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
    if member && member.authenticate(params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.
      session[:member_id] = member.id

      #redirect_to'http://localhost:5000'
      #redirect_to '/'

      render json: member
    else
      output = "login failed! wrong password."
      render json:output
      # If user's login doesn't work, send them back to the login form.
    end
  end

  def destroy
    session[:member_id] = nil
    #redirect_to '/login'
    #redirect_to'http://localhost:5000/login'
  end
end
