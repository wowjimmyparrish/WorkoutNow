class Review < ApplicationRecord
    belongs_to :user
    belongs_to :workout

    validates :comment, presence: true 
    validates :comment, length: {maximum: 100}
end
