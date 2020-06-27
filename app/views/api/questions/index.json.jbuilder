@questions.each do |question|
    json.set! question.id do
        json.set! question.id do 
            json.extract! question, :id, :question, :author_id, :created_at
        end
    end
end