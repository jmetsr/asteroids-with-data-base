class AsteroidsController < ApplicationController
  def index
  	@scores = Score.all
  end
end
