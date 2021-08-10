question_json = json.array! @questions do |question|
    json.extract! question, :id, :question
end
