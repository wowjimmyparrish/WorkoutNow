class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :workout_id, :user_id
  belongs_to :workout 
  belongs_to :user 
end
