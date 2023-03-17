class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :movie_id, :user_id
  belongs_to :movie 
  belongs_to :user 
end
