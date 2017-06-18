require 'test_helper'

class SpamControllerTest < ActionDispatch::IntegrationTest
  test "should send from name with to email" do
    get "/spam", params: { from: "foo", to: "sk@stephaniekwak.com" }

    assert :success
  end
end
