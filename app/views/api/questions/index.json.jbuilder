@questions.each do |question|
    json.set! question.id do
        json.extract! question, :id, :question, :author_id, :topic_id, :updated_at, :created_at
        json.author do 
            json.extract! question.author, :first_name, :last_name
        end
    end
end
#