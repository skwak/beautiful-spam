require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  test "has associated spam" do
    category = Category.new(name: "Personality")
    spam = Spam.new
    category.spams << spam

    assert_includes category.spams, spam
  end
end
