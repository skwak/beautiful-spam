class SpamMailer < ApplicationMailer
  def send_email(from_name, to_email)
    mg_client = Mailgun::Client.new(ENV["MAILGUN_API_KEY"])
    message_params =  {
                       from: 'hi',
                       to:   'sk@stephaniekwak.com',
                       subject: 'test test',
                       text: 'It is really easy to send a message!'
                      }

    result = mg_client.send_message(ENV["MAILGUN_DOMAIN"], message_params).to_h!
#
#                       message_id = result['id']
# message = result['message']

  end
end
