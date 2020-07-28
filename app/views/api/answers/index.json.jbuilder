@answers.each do |answer|
    json.set! answer.id do
        json.extract! answer, :id, :topic_id, :body, :author_id, :updated_at, :created_at
    end
end
#############################
@answers.each do |answer|
    json.comments do 
        answer.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :user_id, :answer_id
                json.user do 
                    json.extract! comment.user, :id, :first_name, :last_name
                end
            end
        end
    end
end