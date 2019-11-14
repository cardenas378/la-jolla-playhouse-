class PerformanceDatesController < ApplicationController
  def index
    @performance_dates = PerformanceDates.all
    render json: @performance_dates
  end

  def show
    @performance_date = PerformanceDates.find([params[:id]])
    render json: @performance_date
  end

  def create
    @performance_date = PerformanceDates.create(performance_date_params)
    render json: @performance_date
  end

  def update
    @performance_date = PerformanceDates.find(params[:id])
    if @performance_date.update(performance_date_params)
      render json: @performance_date
    else
      render json: { error: "could not update" }, status: 400
    end
  end

  def destroy
    @performance_date = PerformanceDates.find(params[:id])
    @performance_date.destroy
  end

  private

  def performance_date_params
    params.require(:performance_date).permit(:date, :booking_id)
  end
end
