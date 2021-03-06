json.answers do
    @answers.each do |answer|
        json.set! answer.id do
            # json.extract! answer, :id, :topic_id, :body, :author_id, :updated_at, :created_at
            json.extract! answer, :id, :body, :author_id, :updated_at, :created_at, :question_id

            json.answerPhotoUrl url_for(answer.photo) if answer.photo.attached?
        end
    end
end
#############################
@answers.each do |answer|
    json.comments do 
        answer.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :user_id, :answer_id, :created_at, :updated_at
                json.user do 
                    json.extract! comment.user, :id, :first_name, :last_name
                    json.profilePhotoUrl url_for(comment.user.photo) if comment.user.photo.attached?
                end
            end
        end
    end
end