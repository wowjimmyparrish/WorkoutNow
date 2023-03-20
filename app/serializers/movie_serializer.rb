class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :genre, :year, :image_url
  has_many :reviews
end
