class Activity < ApplicationRecord
  belongs_to :city
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments
end
