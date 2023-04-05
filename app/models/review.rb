class Review < ApplicationRecord
    belongs_to :user
    belongs_to :workout

    validates :comment, presence: true 
end
