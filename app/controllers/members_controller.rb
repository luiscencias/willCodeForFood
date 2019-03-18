class MembersController < ApplicationController

  def member_params
    params.require(:member).permit(:first_name, :last_name, :email, :phone_number, :graduation_year, :major, :member_status, :password)
  end

  def create
    @member = Member.new(member_params)

    if @member.save
      render json: @member, status: :created
    else
      render json: @member.errors, status: :unprocessable_entity
    end

  end

  def index
    @member = Member.all

    render json: @member
  end

end
