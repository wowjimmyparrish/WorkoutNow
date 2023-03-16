class Movie < ApplicationRecord
    has_many :reviews 
    has_many :users, through: :reviews

    validates :title, presence: true, uniqueness: true 
    validates :director, presence: true 
    validates :genre, presence: true 
    validates :year, presence: true 

end
