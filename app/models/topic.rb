class Topic < ApplicationRecord
    validates :name, presence: true

    has_many :questions,
        class_name: :Question,
        foreign_key: :topic_id,
        primary_key: :id 

end
