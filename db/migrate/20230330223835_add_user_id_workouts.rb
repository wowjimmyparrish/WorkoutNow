class AddUserIdWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :user_id, :integer
  end
end
