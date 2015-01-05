class ScoresController < ApplicationController

	skip_before_filter  :verify_authenticity_token

	def create
		
		@score = Score.new(score_params)
		if @score.save!
			render :json => @score
		else
        	render json: @score.errors.full_messages, status: :unprocessable_entity
      	end
	end

	def index
		@scores = Score.all
		render :json => @scores
	end

	private
	def score_params
    	params.permit(:points, :name)
  	end
end