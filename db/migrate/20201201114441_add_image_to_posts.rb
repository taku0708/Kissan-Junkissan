class AddImageToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :image, :string
    add_column :posts, :user_id, :integer
    add_column :posts, :wifi, :string
    add_column :posts, :dessert, :string
    add_column :posts, :outlet, :string
    add_column :posts, :snack, :string
    add_column :posts, :tobacco, :string
    add_column :posts, :lunch, :string
    add_column :posts, :other, :string
    add_column :posts, :image_two, :string
    add_column :posts, :image_three, :string
    add_column :posts, :image_four, :string
    add_column :posts, :image_five, :string
    add_column :posts, :image_six, :string
  end
end
