@topics.each do |topic|
    json.set! topic.id do
        json.partial! topic: topic
    end
end