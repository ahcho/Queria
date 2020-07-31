json.extract! topic, :id, :name

json.question do 
    json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at, :created_at
    json.author do 
        json.extract! @question.author, :first_name, :last_name, :id
    end
end

json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :title, :author_id, :topic_id, :updated_at, :created_at
    end
  end
end
