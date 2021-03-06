json.extract! @comment, :id , :body, :answer_id, :user_id, :created_at, :updated_at
json.user do
    json.extract! @comment.user, :id, :first_name, :last_name
    json.profilePhotoUrl url_for(@comment.user.photo) if @comment.user.photo.attached?
end
