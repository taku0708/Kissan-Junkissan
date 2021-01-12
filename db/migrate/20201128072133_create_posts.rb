class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :prefecture
      t.string :address
      t.string :tel
      t.string :nearest_station
      t.string :hp
      t.string :business_hours

      t.timestamps
    end
  end
end
