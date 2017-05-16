class Spam < ApplicationRecord
  has_many :categorizations, class_name: "Categorization"
  has_many :categories, through: :categorizations
end
