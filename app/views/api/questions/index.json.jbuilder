@questions.each do |question|
    json.set! question.id do
        json.extract! question, :id, :question, :author_id, :created_at, :topic_id
    end
end