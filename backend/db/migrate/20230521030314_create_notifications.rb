class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false, index: true, default: 0
      t.text :content, null: false, default: ''
      t.text :image_url
      t.string :link_url, null: false, default: '/'
      t.boolean :is_checked, null: false, default: false

      t.timestamps
    end
  end
end
