# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

events = [
    {title: 'Celebrate',  date: '2019-05-15', details: 'take it easy for a lil'},
    {title: 'Internship', date: '2019-05-20',},
    {title: 'Telefone comes out', date: '2016-07-31'},
    {title: 'Mardi', date: '2016-07-31'},
    {title: 'Christmas', date: '2018-12-31', details: 'In the chimney'},
    {title: 'Thanks', date: '2016-07-31'},
    {title: 'Bad and Boujee comes out', date: '2016-07-31'},
    {title: 'Drake signs', date: '2001-07-31'},
    {title: 'Kendrick removes KDOT moniker', date: '2005-07-31'},
    {title: 'The germans invade Poland', date: '1939-07-31'},
    {title: 'Erwin Rommel becomes head of the Africa campaign', date: '1944-07-31'},
    {title: 'Kravchenko dies', date: '1972-07-31'},
]

events.each do |event|
  Event.create!(event)
end

members = [
    {first_name: 'Jonathan', last_name: 'Mejia',  email: 'jonathan.mejia@tamu.edu', phone_number: 1235888582, graduation_year: 2019, major: 'Computer Science', password: 'p', is_member: false},
    {first_name: 'Ian', last_name: 'Berns', email: 'ian.berns@tamu.edu', password: 'p', phone_number: 6545818848, graduation_year: 2019, major: 'Computer Science', is_member: true},
    {first_name: 'blake', email: 'c', password: 'p'},
    {first_name: 'stephanie', email: 'd', password: 'p'},
    {first_name: 'luis', email: 'e', password: 'p'},
    {first_name: 'kylan', email: 'f', password: 'p'},
]

members.each do |member|
  Member.create!(member)
end

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

