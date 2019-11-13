class BookingsController < ApplicationController
  def index
    @performances = Performance.all
    render json: @performances
  end

  def show
    @performance = Performance.find([params[:id]])
    render json: @performance
  end

  def create
    @performance = Performance.create(performance_params)
    render json: @performance
  end

  def update
    @performance = Performance.find(params[:id])
    if @performance.update(performance_params)
      render json: @performance
    else
      render json: { error: "could not update" }, status: 400
    end
  end

  def destroy
    @performance = Performance.find(params[:id])
    @performance.destroy
  end

  private

  def booking_params
    params.require(:performance).permit(:date, :booking_id)
  end
end
