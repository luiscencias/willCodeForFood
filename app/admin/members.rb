ActiveAdmin.register Member do
  permit_params :email, :password, :first_name, :last_name, :phone_number, :graduation_year, :major, :is_member, :points

  #action_item :approve_member, only: :show do
   # link_to "Approve",
  #end



  # Below determines what the view link displays
    show do
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
