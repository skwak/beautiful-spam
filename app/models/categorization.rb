class Categorization < ApplicationRecord
  belongs_to :spam
  belongs_to :category
end
