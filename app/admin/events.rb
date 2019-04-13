ActiveAdmin.register Event do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  permit_params :title, :date, :start_time, :end_time, :details, :location, :points, member_ids: []


  filter :members, as: :select, collection: proc {
    Member.all.map { |mem|
      [mem.first_name.to_s + ' ' + mem.last_name.to_s, mem.id]
    }
  }

  filter :title, as: :string
  filter :date, as: :date_range

  filter :details, as: :string
  filter :location, as: :string

  filter :created_at, as: :date_range
  filter :updated_at, as: :date_range

  controller do
    def create
      # Good
      @event = Event.new(permitted_params[:event])

      if @event.save
        render json: @event, status: :created, location: @event
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end
  end


  show do
    attributes_table do
      row :title

      row :date
      row :start_time
      row :end_time

      row :details
      row :location

      row :created_at
      row :updated_at
    end

    active_admin_comments

    panel "Registered Members" do
      table_for event.members do
        column(:first_name) { |member| member.first_name}
        column :last_name
        column :email
        column :phone_number
        column :graduation_year
        column :major
        column :points
        column('Is a Member') { |member| member.is_member ? 'YES' : 'NO'}
      end
    end

  end

  form html: { multipart: true } do |f|
    f.inputs do
      f.input :title, label: "Title"

      f.input :date
      f.input :start_time
      f.input :end_time

      f.input :details
      f.input :location

      f.input :points

      f.input :member_ids, label: 'Register Members', as: :check_boxes,
              collection: Member.all.map {|m| [m.first_name.to_s + ' ' + m.last_name.to_s, m.id]}
    end
    f.actions
  end


end
