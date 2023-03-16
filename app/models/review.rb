class Review < ApplicationRecord
    belongs_to :user
    belongs_to :movie

    validates :comment, presence: true 
    validates :comment, length: {maximum: 100}
end
