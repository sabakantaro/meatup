class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.text :description
      t.string :title
      t.datetime :meeting_datetime
      t.integer :user_id
      t.integer :place_id
      t.timestamps
    end
  end
end
