class SpamController < ApplicationController
  def index
  end

  def send_email
    SpamMailer.email(params[:from], params[:to]).deliver_now
    redirect_to root_path
  end
end
