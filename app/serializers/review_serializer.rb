class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :movie_id, :user_id
end
