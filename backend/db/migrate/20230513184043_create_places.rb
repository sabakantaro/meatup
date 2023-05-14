class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :image
      t.float :latitude
      t.float :longitude
      t.string :location

      t.timestamps
    end
  end
end
