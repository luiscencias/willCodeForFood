class UserMailer < ActionMailer::Base

  default from: 'pbetamuorg@gmail.com'

  def rejection_body first_name, last_name
    return "Dear " + first_name + " " + last_name + ",\n\n we regret to inform you ..."
  end


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

  #UserMailer.rejection_email(member.email, member.first_name, member.last_name).deliver_now
  def rejection_email email, first_name, last_name
    #@url = "http://localhost:8081/api/admin/members/batch_action"
    body = rejection_body first_name, last_name

    mail(to: email, subject: 'PBE Rejected', body: body, template_path: 'user_mailer', template_name: 'mailer')
  end


  #  UserMailer.contact_batch_email(user.first_name + " " + user.last_name, inputs[:message], inputs[:subject], member.email).deliver
  def contact_batch_email(name, message, subject, recipient)
    @message = "Dear " + name + ",\n\n" + message + "\n\nSincerely,\nPBE"
    @name = name
    @subject = subject
    @recipient = recipient
    mail(to: @recipient, subject: @subject, body: @message, template_path: 'user_mailer', template_name: 'mailer')
  end
end
