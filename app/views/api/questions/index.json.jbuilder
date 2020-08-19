@questions.each do |question|
    json.set! question.id do
        json.extract! question, :id, :question, :author_id, :topic_id, :updated_at, :created_at
        json.topic do
            json.extract! question.topic, :name 
        end
        json.author do 
            json.extract! question.author, :first_name, :last_name
            json.profilePhotoUrl url_for(question.author.photo) if question.author.photo.attached?    
        end
        # json.answers do 
        #     json.extract! question.answers, :id
        # end
    end
end

