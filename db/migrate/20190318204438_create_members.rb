class CreateMembers < ActiveRecord::Migration[5.2]
  def up
    create_table :members do |t|

      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.integer :phone_number, :limit => 8
      t.integer :graduation_year
      t.string :major
      t.string :member_status
      t.integer :points

      t.timestamps
    end

    add_index :members, :email, unique: true

    change_column :members, :member_status, :string, :default => "Pending"
    change_column :members, :points, :integer, :default => 0
  end

  def down
    drop_table :members
  end
end
