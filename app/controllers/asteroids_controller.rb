class AsteroidsController < ApplicationController
  def index
  	@scores = Score.all
  end
  def root
  end
end
