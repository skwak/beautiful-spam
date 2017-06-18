class SpamController < ApplicationController
  def index
  end

  def send_email
    SpamMailer.send_email(params[:from], params[:to])
    redirect_to root_path
  end
end
