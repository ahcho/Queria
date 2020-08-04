json.extract! @topic, :id, :name

json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :question, :author_id, :topic_id, :updated_at, :created_at
    end
  end
end
