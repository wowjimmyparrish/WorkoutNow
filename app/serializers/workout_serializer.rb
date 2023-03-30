class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :length, :focus, :workout
  has_many :reviews
  has_many :users, through: :reviews
  
end
