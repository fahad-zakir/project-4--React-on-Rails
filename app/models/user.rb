class User < ApplicationRecord
has_many :comments, dependent: :destroy
  has_many :activities, through: :comments
end
