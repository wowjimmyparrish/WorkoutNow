class WorkoutsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index 
          workouts = Workout.all
          render json: workouts, include: [:user, :reviews], status: :ok
    end

    
    def show 
        workout = find_workout
        if workout 
            render json: workout, status: :ok 
        else 
            render json: {error: "Workout not found"}, status: :not_found 
        end
    end 
    
    def create 
        workout = user.created_workouts.create!(workout_params) 
        render json: workout, status: :created 
    end
        
    
    def destroy 
        workout = find_workout
      
        if workout && workout.user_id == session[:user_id]
          workout.destroy 
          render json: {}
        elsif workout.nil?
          render json: { error: "Workout not found" }, status: :not_found
        else
          render json: { error: "Unauthorized" }, status: :unauthorized
        end
      end


        private 
        

        def find_workout
            Workout.find_by(id: params[:id]) 
        end

        def workout_params 
            params.permit(:title, :length, :workout, :focus)
        end

        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end

        def authorize
            return render json: { error: "Not authorized, please log in" }, status: :unauthorized unless session.include? :user_id
          end
end
