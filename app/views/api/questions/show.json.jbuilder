json.extract! @question, :id, :topic_id, :question, :author_id, :updated_at


json.author do
    json.extract! @question.author, :first_name, :last_name
end


json.answers do 
    @question.answers.each do |answer|
        json.extract! answer, :body, :id 
    end
end
