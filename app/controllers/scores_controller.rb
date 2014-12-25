class ScoresController < ApplicationController

	skip_before_filter  :verify_authenticity_token

	def create
		@score = Score.new(score_params)
		@score.save!
		render :json => @score
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