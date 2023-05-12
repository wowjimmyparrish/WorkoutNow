class Workout < ApplicationRecord
    has_many :reviews, dependent: :destroy 
    has_many :users, through: :reviews
    belongs_to :user

    validates :title, presence: true, uniqueness: {case_sensitive: false} 
    validates :focus, presence: true
    validates :length, presence: true, inclusion: { in: [45, 60, 90, 120] }
    validates :workout, presence: true 

end
