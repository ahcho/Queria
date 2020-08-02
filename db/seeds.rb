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
Topic.destroy_all


t0 = Topic.create!(name: "Feed")
t1 = Topic.create!(name: "History")
t2 = Topic.create!(name: "Products")
t3 = Topic.create!(name: "Recipe")
t4 = Topic.create!(name: "Health")
t5 = Topic.create!(name: "Tour")

u1 = User.create!(email: 'willy@wonka.com', password: 'password', first_name: 'Willy', last_name: 'Wonka')
u2 = User.create!(email: 'guest1@wonka.com', password: 'password', first_name: 'Augustus', last_name: 'Gloop')
u3 = User.create!(email: 'guest2@wonka.com', password: 'password', first_name: 'Violet', last_name: 'Beauregarde')
u4 = User.create!(email: 'guest3@wonka.com', password: 'password', first_name: 'Veruca', last_name: 'Salt')
demo = User.create!(email: 'charlie@chocolate.com', password: 'password', first_name: 'Charlie', last_name: 'Bucket')
u5 = User.create!(email: 'guest7@wonka.com', password: 'password', first_name: 'Mr.', last_name: 'Turkentine')
u6 = User.create!(email: 'guest4@wonka.com', password: 'password', first_name: 'Mike', last_name: 'Teavee')
u7 = User.create!(email: 'guest5@wonka.com', password: 'password', first_name: 'Marvin', last_name: 'Prune')
u8 = User.create!(email: 'guest6@wonka.com', password: 'password', first_name: 'Veruca', last_name: 'Salt')
u9 = User.create!(email: 'guest8@wonka.com', password: 'password', first_name: 'Joe', last_name: 'Bucket')

t1 = Topic.create!(id: 1, name: "Feed")
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
q9 = Question.create!(question: "How can I get a private tour at the factory?", author_id: demo.id, topic_id: t5.id)
q10 = Question.create!(question: "Will they have another golden ticket event?", author_id: u2.id, topic_id: t3.id)
q11 = Question.create!(question: "Is Mr. Wonka nice??", author_id: u3.id, topic_id: t2.id)
q12 = Question.create!(question: "Who wrote Chalie and Chocolate Factory??", author_id: u3.id, topic_id: t2.id)
q13 = Question.create!(question: "Can you tell me about the Vanila Fudge Room??", author_id: u4.id, topic_id: t1.id)
q14 = Question.create!(question: "How can I prevent cavities?", author_id: demo.id, topic_id: t2.id)

a1 = Answer.create!(
body:
 "It's a secret!",
author_id: u1.id,
question_id: q1.id)

a1_1 = Answer.create!(
body:
 "I <3 original milk chocolate bar",
author_id: u2.id,
question_id: q1.id)

a1_2 = Answer.create!(
body:
 "Anything from Wonka inc!",
author_id: u9.id,
question_id: q1.id)

b1 = Answer.create!(
body:
 "I bought 2 bars and got the ticket",
author_id: demo.id,
question_id: q2.id)

b2 = Answer.create!(
body:
 "Mr. Wonka is my dad' friend's teacher's son's nextdoor neightbour's cousin!",
author_id: u1.id,
question_id: q2.id)

b3 = Answer.create!(
body:
 "They are the friendly people working in Wonka factory",
author_id: u9.id,
question_id: q4.id)

b4 = Answer.create!(
body:
 "No one knows where they are from, but they do make create chocolate!",
author_id: u8.id,
question_id: q4.id)

a2 = Answer.create!(
body:
 "It's a super secret!!",
author_id: demo.id,
question_id: q4.id)

a3 = Answer.create!(
body:
 "It's a super super secret!",
author_id: u2.id,
question_id: q8.id)

c1 = Answer.create!(
body:
 "It's a secret!",
author_id: u1.id,
question_id: q4.id)

c1_1 = Answer.create!(
body:
 "I <3 original milk chocolate bar",
author_id: u2.id,
question_id: q1.id)

c1_2 = Answer.create!(
body:
 "I don't like chocolate!!",
author_id: u4.id,
question_id: q6.id)

c1 = Answer.create!(
body:
 "I bought 2 bars and got the ticket",
author_id: demo.id,
question_id: q6.id)

c2 = Answer.create!(
body:
 "Mr. Wonka is my dad' friend's teacher's son's nextdoor neightbour's cousin!",
author_id: u1.id,
question_id: q6.id)

c33 = Answer.create!(
body:
 "I bouth 1000000000 wonka bar to get the ticket",
author_id: u2.id,
question_id: q4.id)

c42 = Answer.create!(
body:
 "I bought it from black market",
author_id: u4.id,
question_id: q4.id)

c21 = Answer.create!(
body:
 "It's a super secret!!",
author_id: demo.id,
question_id: q3.id)

c35 = Answer.create!(
body:
 "It's a super super secret!",
author_id: u2.id,
question_id: q3.id)
c1_2 = Answer.create!(
body:
 "I don't like chocolate!!",
author_id: u4.id,
question_id: q6.id)

d1 = Answer.create!(
body:
 "I bought 2 bars and got the ticket",
author_id: u5.id,
question_id: q6.id)

d2 = Answer.create!(
body:
 "Mr. Wonka is my dad' friend's teacher's son's nextdoor neightbour's cousin!",
author_id: u1.id,
question_id: q6.id)

d33 = Answer.create!(
body:
 "I bouth 1000000000 wonka bar to get the ticket",
author_id: u5.id,
question_id: q4.id)

d42 = Answer.create!(
body:
 "I bought it from black market",
author_id: u4.id,
question_id: q4.id)

d21 = Answer.create!(
body:
 "It's a super secret!!",
author_id: demo.id,
question_id: q3.id)

d35 = Answer.create!(
body:
 "It's a super super secret!",
author_id: u2.id,
question_id: q3.id)