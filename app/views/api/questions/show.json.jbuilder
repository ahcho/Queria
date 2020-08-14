json.question do 
    json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at, :created_at
    json.questionPhotoUrl url_for(@question.photo) if @question.photo.attached?
    json.author do 
        json.extract! @question.author, :first_name, :last_name, :id
        json.profilePhotoUrl url_for(@question.author.photo) if @question.author.photo.attached?
    end
end

json.users do
    @question.answers.each do |answer|
        json.set! answer.author.id do
            json.extract! answer.author, :first_name, :last_name, :id
            json.profilePhotoUrl url_for(answer.author.photo) if answer.author.photo.attached?
        end
    end
    json.set! @question.author.id do
        json.extract! @question.author, :first_name, :last_name, :id
        json.profilePhotoUrl url_for(@question.author.photo) if @question.author.photo.attached?
    end
end

json.answers do 
    @question.answers.each do |answer|
        json.set! answer.id do 
            json.extract! answer, :body, :id, :author_id, :question_id, :updated_at, :created_at
            json.answerPhotoUrl url_for(answer.author.photo) if answer.author.photo.attached?
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
                    json.profilePhotoUrl url_for(comment.user.photo) if comment.user.photo.attached?
                end
            end
        end
    end
end

# json.question do 
#     json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at, :created_at
#     json.author do 
#         json.extract! @question.author, :first_name, :last_name, :id
#     end
# end


# json.users do
#     @question.answers.each do |answer|
#         json.set! answer.author.id do
#             json.extract! answer.author, :first_name, :last_name, :id
#         end
#     end
#     json.set! @question.author.id do
#         json.extract! @question.author, :first_name, :last_name, :id
#     end
# end

# json.answers do 
#     @question.answers.each do |answer|
#         json.set! answer.id do 
#             json.extract! answer, :body, :id, :author_id, :question_id, :updated_at, :created_at
#         end        
#     end
# end

# json.comments do 
#     @question.answers.each do |answer|
#         answer.comments.each do |comment|
#             json.set! comment.id do
#                 json.extract! comment, :id, :body, :user_id, :answer_id, :updated_at, :created_at
#                 json.user do 
#                     json.extract! comment.user, :id, :first_name, :last_name
#                 end
#             end
#         end
#     end
# end


