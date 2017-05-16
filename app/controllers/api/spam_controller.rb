class Api::SpamController < ApplicationController
  def index
    if params[:category]
      category = Category.find_by(name: params[:category])
      spam = category.spams
    else
      spam = Spam.all
    end
    render json: spam
  end
end
