class Workout < ApplicationRecord
    has_many :reviews, dependent: :destroy 
    has_many :users, through: :reviews
    

    validates :title, presence: true, uniqueness: true 
    validates :focus, presence: true 
    validates :length, presence: true 
    validates :workout, presence: true 

end
