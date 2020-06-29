# # @questions.each do |question|
#     #json.set! @question.id do
#         json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at
#     #end
# # end

json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at


json.author do
    json.extract! @question.author, :first_name, :last_name
end

##@question.answers returns an array, so iteration is needed.
############################################C
json.answers do 
    @question.answers.each do |answer|
        json.extract! answer, :body, :id 
    end
end
############################################C
