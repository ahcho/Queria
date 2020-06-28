# @questions.each do |question|
    #json.set! @question.id do
        json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at
    #end
# end