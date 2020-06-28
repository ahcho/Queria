# # @questions.each do |question|
#     #json.set! @question.id do
#         json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at
#     #end
# # end

json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at


json.author do
    json.extract! @question.author, :first_name, :last_name
end


#############################################C
# json.answers do 
#     json.extract! @question.answers, :body
# end
#############################################C
