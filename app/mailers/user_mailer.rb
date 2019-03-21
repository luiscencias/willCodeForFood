class UserMailer < ApplicationMailer

  default from: 'ianberns1@gmail.com'

  def confirmation_email
    @url = 'http://localhost:8081/shop'
    mail(to: @email, subject: @subject)
    puts @email
  end
end
