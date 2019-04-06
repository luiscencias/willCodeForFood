ActiveAdmin.register Member do

  permit_params :email, :password_digest, :first_name, :last_name, :phone_number, :graduation_year, :major, :is_member, :points

  #action_item :approve_member, only: :show do
   # link_to "Approve",
  #end
end
