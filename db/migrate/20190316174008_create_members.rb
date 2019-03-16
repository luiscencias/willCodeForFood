class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    drop_table :members

    create_table :members do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number
      t.string :graduation
      t.integer :year
      t.string :major
      t.boolean :member
      t.string :username
      t.string :password

      t.timestamps
    end

    change_column :members, :member, :boolean, :default=>false
  end
end
