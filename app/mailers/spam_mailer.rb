class SpamMailer < ApplicationMailer
  def email(from_name, to_email)
    mail(
      :subject => 'hello',
      :to      => 'me@beautifulspam.email',
      :from    => 'me@beautifulspam.email',
      :tag     => 'my-tag',
      :track_opens => 'true'
    )
  end
end
