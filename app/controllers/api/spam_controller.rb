class Api::SpamController < ApplicationController
  def index
    @spam = Spam.all
    render json: @spam
  end
end
