class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    drop_table :members
    create_table :members do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number
      t.integer :graduation_year
      t.string :major
      t.boolean :member_status
      t.string :password

      t.timestamps
    end
    change_column :members, :member_status, :boolean, :default=>false
  end
end
