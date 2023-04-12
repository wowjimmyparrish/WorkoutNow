class Review < ApplicationRecord
    belongs_to :user
    belongs_to :workout

    validates :comment, presence: true
    validates :user_id, uniqueness: {scope: :workout_id, message: "Can only review workout once!"} 
end
