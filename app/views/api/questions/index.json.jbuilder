# @questions.each do |question|
#     json.set! question.id do
#         json.extract! question, :id, :question, :author_id, :created_at, :topic_id
#     end
# end

@questions.each do |question|
    json.set! question.id do
        json.extract! question, :id, :question, :author_id, :created_at, :topic_id
        json.author do 
            json.extract! question.author, :first_name, :last_name
        end
    end
end
# json.set!
# @questions.each do |qeustion|
# @questions.each do |question|
#     json.set! question.id do
#         json.extract! question, :id, :question, :author_id, :created_at, :topic_id
#     end
# end

# # @questions.each do |question|
# #     json.set! question.id do
# #         json.extract! question, :id, :question, :author_id, :created_at, :topic_id
# #         json.author do 
# #             json.extract! question.author, :first_name, :last_name
# #         end
# #     end
# # end

# json.answers do 
#     @question.answers.each do |answer|
#         json.extract! answer, :body, :id 
#     end
# end

# # @questions.each do |question|
# #     json.answers do
# #         question.answers.each do |answer|
# #             json.set! answer.id do
# #                 json.author do
# #                     json.extract! answer.user, :first_name, :last_name
# #                 end
# #                 json.extract! answer, :body
# #             end
# #         end
# #     end

# # end

# # payload:
# # {
# #     questions: 3 { 
# #         question: “what is your favorite wonka bar?”, 
# #         created_at: "2020 02 18 12:30PM",
# #         author_id: 2 (use this ),
# #         answer_ids: [1,2,3,4],
# #         id: 3
# #     },
# #     user: {
# #         first_name: “Marcus”,
# #         last_name: “Khoury”
# #     },
# #     answers: {
# #         1: {
# #             body: “nothing can beat Wonka Original bar”,
# #             updated_at: “2020 03 06 11:00AM”
# #             author: {
# #                 first_name: “Willy”,
# #                 last_name: “Wonka”
# #             }
# #         }
# #     }
# # }
