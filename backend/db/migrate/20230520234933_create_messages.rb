class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :chatroom_id, null: false, index: true, default: 0
      t.integer :user_id, null: false, index: true, default: 0
      t.string :content, null: false, default: ''

      t.timestamps
    end
  end
end
