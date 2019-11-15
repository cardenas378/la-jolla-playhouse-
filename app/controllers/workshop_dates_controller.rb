class WorkshopDatesController < ApplicationController
  def index
    @workshop_dates = WorkshopDate.all
    render json: @workshop_dates
  end

  def show
    @workshop_date = WorkshopDate.find(params[:id])
    render json: @workshop_date
  end

  def create
    @workshop_date = WorkshopDate.create(workshop_dates_params)
    render json: @workshop_date
  end

  def update
    @workshop_date = WorkshopDate.find(params[:id])
    if @workshop_date.update(workshop_dates_params)
      render json: @workshop_date
    else
      render json: { error: "could not update" }, status: 400
    end
  end

  def destroy
    @performance_date = WorkshopDate.find(params[:id])
    @performance_date.destroy
  end

  private

  def workshop_dates_params
    params.require(:workshop_dates).permit(:workshop_date, :booking_id)
  end
end
