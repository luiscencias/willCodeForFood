class UserMailer < ApplicationMailer

  default from: 'pbetamuorg@gmail.com'

  def confirmation_email(email, subject)
    @url = 'http://localhost:8081/shop'
    puts 'Hello'
    @subject = subject
    @email = email
    mail(to: @email, subject: @subject)
  end
end
