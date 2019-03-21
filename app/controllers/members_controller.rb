class MembersController < ApplicationController
  before_action :set_member, only: [:show, :update, :destroy]

  def test
    puts :name
    puts "Here"
  end

  def test2
    puts "Test 2"
    render json: :name
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
    puts params
    puts "Here 1"
    puts params[0]
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
      params.require(:member).permit(:email, :password, :password_confirmation, :first_name, :last_name)
    end
end
