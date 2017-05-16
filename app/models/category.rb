class Category < ApplicationRecord
  has_many :categorizations, class_name: "Categorization"
  has_many :spams, through: :categorizations
end
