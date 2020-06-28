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