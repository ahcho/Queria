json.question do 
    json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at
end


json.users do
    @question.answers.each do |answer|
        json.set! answer.author.id do
            json.extract! answer.author, :first_name, :last_name, :id
        end
    end
    json.set! @question.author.id do
        json.extract! @question.author, :first_name, :last_name, :id
    end
end

# payload {
#     question: {id: topic_id: ...}
#     users:{
#         3(answer.author.id): {first, last, id}
#         4 :
#         5[same as author_id in line 2]
#     }

#     answers: {
#         1: {
#             body: 
#             id:
#         }
#     }

# }

json.answers do 
    @question.answers.each do |answer|
        json.set! answer.id do 
            json.extract! answer, :body, :id, :author_id, :question_id
        end
    end
end

