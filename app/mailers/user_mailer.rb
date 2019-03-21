class UserMailer < ActionMailer::Base

  default from: 'pbetamuorg@gmail.com'

  def confirmation_email(email, subject)
    @url = 'http://localhost:8081/shop'
    @email = email
    @subject = subject
    mail(to: @email, subject: 'PBE Store Order Confirmation', body: @subject, template_path: 'user_mailer', template_name: 'mailer')
  end
end
