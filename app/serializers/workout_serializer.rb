class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :length, :focus, :workout
  has_many :reviews
  belongs_to :users
  
end
