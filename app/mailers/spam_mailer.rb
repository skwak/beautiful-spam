require 'mailgun'

class SpamMailer < ApplicationMailer
  def email(from_name, to_email)
    client = Mailgun::Client.new(ENV["MAILGUN_API_KEY"])

    client.send_message(
      ENV["MAILGUN_DOMAIN"],
      {
        from: ENV["MAILGUN_SMTP_LOGIN"],
        to: to_email,
        subject: "hi",
        text: "wow"
      }
    )
  end
end
