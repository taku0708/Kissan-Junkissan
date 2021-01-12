class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_posts, through: :likes, source: :post
  has_many :comments, dependent: :destroy
  has_many :nices, dependent: :destroy
  has_many :niced_comments, through: :nices, source: :comment
  def already_liked?(post)
    self.likes.exists?(post_id: post.id)
  end

  def already_niced?(comment)
    self.nices.exists?(comment_id: comment.id)
  end

  validates :name, presence: true
  validates :profile, length: { maximum: 200 }
  mount_uploader :image, ImageUploader
  
end
