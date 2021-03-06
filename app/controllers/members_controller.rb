class MembersController < ApiController
  before_action :set_member, only: [:show, :update, :destroy]

  def login
    member = Member.find_by(email: params[:email])

    if member && member.authenticate(params[:password])
      puts "Logged in"
      puts Member_logged_in?
    else
      puts "Username or Password Incorrect"
    end
  end

  # GET /members
  def index
    @members = Member.all

    render json: @members
  end

  # GET /members/1
  def show
    render json: @member
  end

  # POST /members
  def create
    @member = Member.new(member_params)

    if @member.save
      render json: @member, status: :created, location: @member
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /members/1
  def update
    if @member.update(member_params)
      render json: @member
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  # DELETE /members/1
  def destroy
    @member.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def member_params
      params.permit(:email, :password, :first_name, :last_name, :phone_number, :graduation_year, :major, :member_status, :points)
      #params.require(:member).permit(:email, :password, :password_confirmation, :first_name, :last_name)
    end
end
