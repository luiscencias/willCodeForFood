ActiveAdmin.register Member do

  permit_params :email, :password_digest, :first_name, :last_name, :phone_number, :graduation_year, :major, :is_member, :points

  def reject_email email
    puts email
  end

  index do
    selectable_column
    columns_to_exclude = ["password_digest"]
    (Member.column_names - columns_to_exclude).each do |c|
      column c.to_sym
    end
    #column :description do
    # raw "<a class='view_description button'>View Description</a>"
    #end
  end

  batch_action :email do |ids|
    batch_action_collection.find(ids).each do |member|
      reject_email "Jeff" #member.email
    end
    redirect_to collection_path#, alert: "The posts have been flagged."
  end


  #action_item :approve_member, only: :show do
   # link_to "Approve",
  #end
end
