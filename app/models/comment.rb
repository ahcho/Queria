class Comment < ApplicationRecord
    validates :body, :user_id, :answer_id, presence: true
    
    belongs_to :answer
    belongs_to :user
end