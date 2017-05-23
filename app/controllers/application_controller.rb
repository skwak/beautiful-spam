class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    render text: "#{params[:id]}.#{ENV["ACME_CONTENT"]}"
  end
end
