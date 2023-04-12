class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index 
          reviews = Review.all
          render json: reviews, include: [:user, :workout], status: :ok
    end 
    

    def show 
        review = find_review 
        if review 
            render json: review, status: :ok 
        else 
            render json: {error: "Review not found"}, status: :not_found 
        end
    end 

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created 
    end 

    def update 
        review = find_review 
        review.update!(review_params)
        render json: review, status: :ok
    end 

    def destroy 
        review = find_review
        if review
        review.destroy 
        head :no_content 
        else
            render json: { error: "Review not found" }, status: :not_found 
        end
    end

    private 

    def find_user
        User.find_by(id: params[:user_id]) 
      end 

    def find_review
        Review.find_by(id: params[:id]) 
    end

    def review_params 
        params.permit(:comment, :user_id, :workout_id)
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end


end
