# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create!(email: 'Apple@pie.com', password: 'password', first_name: 'Nick', last_name: 'Terrasen')
u2 = User.create!(email: 'banana@pie.com', password: 'password', first_name: 'banana', last_name: 'pie')
u3 = User.create!(email: 'chocolate@pie.com', password: 'password', first_name: 'chocolate', last_name: 'pie')
u4 = User.create!(email: 'lemon@pie.com', password: 'password', first_name: 'lemon', last_name: 'pie')
demo = User.create!(email: 'charlie@chocolate.com', password: 'password', first_name: 'Charlie', last_name: 'Bucke')