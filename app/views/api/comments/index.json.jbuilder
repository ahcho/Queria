@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :answer_id, :user_id, :created_at, :updated_at
    end
end