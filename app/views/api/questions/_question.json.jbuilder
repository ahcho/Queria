json.extract! question, :id, :title, :author_id, :topic_id, :updated_at, :created_at

json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! '/api/questions/question', question: question
      json.answerIds do
        json.array! question.answers, :id
      end
    end
  end
end