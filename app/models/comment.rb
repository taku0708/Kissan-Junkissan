class Comment < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  belongs_to :post
  has_many :nices, dependent: :destroy
  has_many :niced_users, through: :nices, source: :user
end
