class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.date :date
      t.time :start_time
      t.time :end_time
      t.text :details
      t.text :location
      t.integer :points

      t.timestamps
    end
    change_column :events, :points, :integer, :default => 0
  end
end
