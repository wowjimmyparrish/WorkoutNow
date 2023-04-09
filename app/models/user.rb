class User < ApplicationRecord
    has_many :reviews
    has_many :workouts, through: :reviews
    has_many :created_workouts, class_name: "Workout"

    has_secure_password 
    
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, confirmation: :true
end
