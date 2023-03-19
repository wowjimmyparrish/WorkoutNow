# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create!(title: "Pulp Fiction", director: "Quentin Tarantino", genre: "Crime", year: 1994, image_url:"https://en.wikipedia.org/wiki/File:Pulp_Fiction_(1994)_poster.jpg" ) 
Movie.create!(title: "Young Frankenstein", director: "Mel Brooks", genre: "Comedy", year: 1974, image_url:"https://en.wikipedia.org/wiki/File:Young_Frankenstein_movie_poster.jpg")
Movie.create!(title: "Tombstone", director: "George P. Cosmatos", genre: "Western", year: 1993, image_url:"https://en.wikipedia.org/wiki/File:Tombstoneposter.jpeg")
Movie.create!(title: "Good Will Hunting", director: "Gus Van Sant", genre: "Drama", year: 1997, image_url: "https://en.wikipedia.org/wiki/File:Good_Will_Hunting.png") 

User.create!(username: "jimmy", password: "password")
User.create!(username: "darrel", password: "password123")

Review.create!(comment: "Great movie!", rating: 5, user_id: 1, movie_id: 1) 
Review.create!(comment: "Bad movie!", rating: 2, user_id: 2, movie_id: 2)

