class Categorization < ApplicationRecord
  belongs_to :spam
  belongs_to :categories
end
