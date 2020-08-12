json.extract! @answer, :id , :body, :question_id, :author_id, :updated_at, :created_at
json.photoPhotoUrl url_for(@answer.photo) if @answer.photo.attached?
