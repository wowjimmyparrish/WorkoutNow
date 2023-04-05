class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :workout_id, :user_id
  belongs_to :workout 
  belongs_to :user 
end
