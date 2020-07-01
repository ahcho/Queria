json.user do
    json.extract! user, :id, :email, :first_name, :last_name, :question_ids, :answer_ids
end


json.questions do
    user.questions.each do |question|
        json.set! question.id do
            json.extract! question, :question, :updated_at, :created_at, :id, :author_id
            json.author do 
                json.extract! question.author, :first_name, :last_name, :id
            end
        end
    end
end


json.answers do 
    user.answers.each do |answer|
        json.set! answer.id do
            json.extract! answer, :body, :updated_at, :created_at, :id, :author_id, :question_id
        end
    end
end