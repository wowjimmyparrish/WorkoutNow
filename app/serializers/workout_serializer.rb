class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :length, :focus, :workout, :user_id
  has_many :reviews
  belongs_to :user

  
end
