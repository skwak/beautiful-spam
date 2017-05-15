class Category < ApplicationRecord
  has_many :categorizations
  has_many :spams, through: :categorizations
end
