# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#events = [
#    {title: 'Celebrate',  date: '2019-05-15', details: 'take it easy for a lil'},
#    {title: 'Telefone comes out', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Mardi', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Christmas', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Thanks', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Bad and Boujee comes out', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Drake signs', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Kendrick removes KDOT moniker', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'The germans invade Poland', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Erwin Rommel becomes head of the Africa campaign', date: '2016-07-31', details: 'Noname\'s debut album'},
#    {title: 'Kravchenko dies', date: '2016-07-31', details: 'Noname\'s debut album'},
#]

#events.each do |event|
 # Event.create!(event)
#end

members = [
    {first_name: 'jonathan', email: 'a', password: 'p'},
    {first_name: 'ian', email: 'b', password: 'p'},
    {first_name: 'blake', email: 'c', password: 'p'},
    {first_name: 'stephanie', email: 'd', password: 'p'},
    {first_name: 'luis', email: 'e', password: 'p'},
    {first_name: 'kylan', email: 'f', password: 'p'},
]

members.each do |member|
  Member.create!(member)
end

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

