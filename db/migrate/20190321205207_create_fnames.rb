class CreateFnames < ActiveRecord::Migration[5.2]
  def change
    create_table :fnames do |t|
      t.string :lname
      t.string :email
      t.string :subject

      t.timestamps
    end
  end
end
