class Post < ApplicationRecord
   mount_uploader :image, ImageUploader
   mount_uploader :image_two, ImageUploader
   mount_uploader :image_three, ImageUploader
   mount_uploader :image_four, ImageUploader
   mount_uploader :image_five, ImageUploader
   mount_uploader :image_six, ImageUploader
   belongs_to :user
   has_many :likes, dependent: :destroy
   has_many :liked_users, through: :likes, source: :user
   has_many :comments, dependent: :destroy

end
