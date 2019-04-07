class CreateEventsMembersJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :events, :members do |t|
      t.index :event_id
      t.index :member_id
    end
  end
end
