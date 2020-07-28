json.extract! @comment, :id , :body, :answer_id, :author_id, :created_at
json.user do
    json.extract! @comment.user, :id, :first_name, :last_name
end
