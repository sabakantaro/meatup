class CreateChatroomUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :chatroom_users do |t|
      t.integer :chatroom_id, null: false, index: true, default: 0
      t.integer :user_id, null: false, index: true, default: 0

      t.timestamps
    end
  end
end
