json.question do 
    json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at, :created_at
    json.author do 
        json.extract! @question.author, :first_name, :last_name, :id
    end
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

json.answers do 
    @question.answers.each do |answer|
        json.set! answer.id do 
            json.extract! answer, :body, :id, :author_id, :question_id, :updated_at, :created_at
        end        
    end
end

json.comments do 
    @question.answers.each do |answer|
        answer.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :user_id, :answer_id, :updated_at, :created_at
                json.user do 
                    json.extract! comment.user, :id, :first_name, :last_name
                end
            end
        end
    end
end
# {
#   question: {...},
#   answers: {
#     1: {
#       id: 1,
#       text: asdhfjkdashf                                                                                                                    comments: {
#     3: {
#       id: 3,
#       text: sadfjkas
#     },
#     etc. etc. 
#   }
#     }
# } 

