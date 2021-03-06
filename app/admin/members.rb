ActiveAdmin.register Member do


  permit_params :email, :password_digest, :first_name, :last_name, :phone_number, :graduation_year, :major, :member_status, :points

  index :download_links => false do
    selectable_column
    id_column
    column :email
    column :first_name
    column :last_name
    column :phone_number
    column :graduation_year
    column :major
    column :member_status
    column :points
    actions
  end

  batch_action :email, form: {subject: :text, message: :textarea}, confirm: "Please enter the subject and the message below" do |ids, inputs|
    batch_action_collection.find(ids).each do |member|
      UserMailer.contact_batch_email(member.first_name + " " + member.last_name, inputs[:message], inputs[:subject], member.email).deliver
    end
    redirect_to collection_path, notice: "The batch email has been sent to all the members you selected."
  end

  batch_action :approve do |ids|
    batch_action_collection.find(ids).each do |member|
      if member.member_status == "Pending"
        member.update(member_status: "Approved")
      end
    end
    redirect_to collection_path, notice: "The selected members have been approved."
  end

  batch_action :reject do |ids|
    batch_action_collection.find(ids).each do |member|
      if member.member_status == "Pending"
        member.update(member_status: "Rejected")
      end
    end
    redirect_to collection_path, notice: "The selected members have been rejected."
  end

  action_item :approve, priority: 0, only: :show do
    link_to "Approve",  approve_admin_member_path(member), method: :put if member.member_status != "Approved" and member.member_status != "Rejected"
  end

  action_item :approve, priority: 0, only: :show do
    link_to "Un-Approve",  unapprove_admin_member_path(member), method: :put if member.member_status != "Pending" and member.member_status != "Rejected"
  end

  action_item :reject, priority: 1, only: :show do
    link_to "Reject", reject_admin_member_path(member), method: :put if member.member_status != "Approved" and member.member_status != "Rejected"
  end

  action_item :reject, priority: 1, only: :show do
    link_to "Un-Reject", unreject_admin_member_path(member), method: :put if member.member_status != "Pending" and member.member_status != "Approved"
  end

  member_action :approve, method: :put do
    member = Member.find(params[:id])
    member.update(member_status: "Approved")
    redirect_to admin_member_path(member)
  end

  member_action :unapprove, method: :put do
    member = Member.find(params[:id])
    member.update(member_status: "Pending")
    redirect_to admin_member_path(member)
  end

  member_action :reject, method: :put do
    member = Member.find(params[:id])
    member.update(member_status: "Rejected")
    redirect_to admin_member_path(member)
  end

  member_action :unreject, method: :put do
    member = Member.find(params[:id])
    member.update(member_status: "Pending")
    redirect_to admin_member_path(member)
  end

  #action_item :approve_member, only: :show do
   # link_to "Approve",
  #end



  # Below determines what the view link displays
    show title: :first_name do

      attributes_table do
        row :first_name
        row :last_name

        row :email
        row :phone_number

        row :graduation_year
        row :major

        row :points

        row :created_at
        row :updated_at
      end

      active_admin_comments

      # possible values for member status
      # accepted, rejected, pending
      panel "Registered Events" do
        table_for member.events do
          column :title

          column :date
          column :start_time
          column :end_time

          column :details
          column :location

          column :points
        end
      end


    end


end
