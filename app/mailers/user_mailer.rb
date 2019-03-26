class UserMailer < ActionMailer::Base

  default from: 'pbetamuorg@gmail.com'

  def confirmation_email(email, subject)
    @url = 'http://localhost:8081/shop'
    @email = email
    @subject = subject
    mail(to: @email, subject: 'PBE Store Order Confirmation', body: @subject, template_path: 'user_mailer', template_name: 'mailer')
  end

  def notice_email(email, subject, fname, lname)
    @url = 'http://localhost:8081/shop'
    @lname = lname
    @fname = fname
    @email = email
    @subject = subject
    mail(to: 'pbetamuorg@gmail.com', subject: 'PBE Store Order Notification', body: @fname + ' ' + @lname + ' ' + @subject, template_path: 'user_mailer', template_name: 'mailer')
  end
end
