class AddParkingToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :parking, :string
  end
end
