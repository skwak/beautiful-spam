class Spam < ApplicationRecord
  has_many :categorizations
  has_many :categories, through: :categorizations
end
