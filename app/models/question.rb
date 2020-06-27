class Question < ApplicationRecord
    validates :question, :author_id, :topic_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        primary_key: :id,
        class_name: :User
end
