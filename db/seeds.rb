# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Topic.destroy_all
Question.destroy_all
Answer.destroy_all

u1 = User.create!(email: 'willy@wonka.com', password: 'password', first_name: 'Willy', last_name: 'Wonka')
u2 = User.create!(email: 'guest1@wonka.com', password: 'password', first_name: 'Augustus', last_name: 'Gloop')
u3 = User.create!(email: 'guest2@wonka.com', password: 'password', first_name: 'Violet', last_name: 'Beauregarde')
u4 = User.create!(email: 'guest3@wonka.com', password: 'password', first_name: 'Veruca', last_name: 'Salt')
demo = User.create!(email: 'charlie@chocolate.com', password: 'password', first_name: 'Charlie', last_name: 'Bucket')

t1 = Topic.create!(name: "Feed")
t2 = Topic.create!(name: "History")
t3 = Topic.create!(name: "Tour")
t4 = Topic.create!(name: "Recipe")
t5 = Topic.create!(name: "Product")

q1 = Question.create!(question: "What is your favorite chocolate?", author_id: demo.id, topic_id: t5.id)
q2 = Question.create!(question: "How do I get a golden ticket?", author_id: u2.id, topic_id: t3.id)
q3 = Question.create!(question: "How old is Mr. Wonka?", author_id: u3.id, topic_id: t2.id)
q4 = Question.create!(question: "Who are the Oompa Loompas?", author_id: u3.id, topic_id: t2.id)
q5 = Question.create!(question: "Where can I get caviti-filling caramels?", author_id: u4.id, topic_id: t1.id)
q6 = Question.create!(question: "Is Chewing gum meal vegan??", author_id: demo.id, topic_id: t2.id)
q7 = Question.create!(question: "Can I swim in the chocolate river?", author_id: u2.id, topic_id: t3.id)
q8 = Question.create!(question: "What are the ingredients for Ice creams that never melt? is it organic?", author_id: u2.id, topic_id: t5.id)

a1 = Answer.create!(
body:
 "It's a secret!",
author_id: u1.id,
question_id: q1.id)

a2 = Answer.create!(
body:
 "It's a super secret!!",
author_id: demo.id,
question_id: q2.id)

a3 = Answer.create!(
body:
 "It's a super super secret!",
author_id: u2.id,
question_id: q8.id)