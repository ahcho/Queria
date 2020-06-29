json.user do
    json.extract! @user, :id, :email, :first_name, :last_name
end

json.questions do
    @user.questions.each do |question|
        json.set! question.id do
            json.extract! question, :question, :updated_at
        end
    end
end

json.answers do 
    @user.answers.each do |answer|
        json.set! answer.id do
            json.extract! answer, :body, :updated_at
        end
    end
end


# {
#     user: {} // this will hit users reducer
#     questions: {} // " questions reducer
#     answers: {} // answers reducer
# }
