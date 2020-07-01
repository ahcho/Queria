@answers.each do |answer|
    json.set! answer.id do
        json.extract! answer, :id, :topic_id, :body, :author_id, :updated_at, :created_at
    end
end