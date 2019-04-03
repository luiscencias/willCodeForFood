class CreateMembers < ActiveRecord::Migration[5.2]
  def up
    create_table :members do |t|

      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.integer :phone_number
      t.integer :graduation_year
      t.string :major
      t.boolean :is_member
      t.integer :points

      t.timestamps
    end

    add_index :members, :email, unique: true

    change_column :members, :is_member, :boolean, :default => false
    change_column :members, :points, :integer, :default => 0
  end

  def down
    drop_table :members
  end
end
