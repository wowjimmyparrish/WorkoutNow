class MoviesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: [:index, :show]

    def index 
        movies = Movie.all 
        render json: movies, status: :ok
    end

    def show 
        movie = find_movie
        if movie 
            render json: movie, status: :ok 
        else 
            render json: {error: "Movie not found"}, status: :not_found 
        end
    end 

    def create 
        movie = Movie.create!(movie_params) 
        render json: movie, status: :created 
    end

        private 

        def find_movie
            Movie.find_by(id: params[:id]) 
        end

        def movie_params 
            params.permit(:title, :director, :genre, :year, :image_url)
        end

        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors }, status: :unprocessable_entity
        end
end
