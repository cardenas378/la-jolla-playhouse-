require 'rails_helper'

RSpec.describe WorkshopDatesController, type: :controller do
  let(:booking) { Booking.create!(location_id: location.id, contact_first_name: "Erik") }
  let(:location) { Location.create(name: "LEARN") }
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(200)
    end

    it 'checks workshop date being created in the response' do
      WorkshopDate.create!(booking_id: booking.id, workshop_date: "12-10-12")
      get :index
      expect(response.body).to include("12-10-12")
    end
  end

  context 'POST #create' do
    it 'can create a workshop date' do
      post :create, params: { workshop_dates: { booking_id: booking.id,
                                                workshop_date: "12-10-12" }, format: :json }
      expect(response.body).to include("12-10-12")
    end
  end

  context 'PUT #update' do
    it 'can update a workshop date' do
      @workshop_date = WorkshopDate.create(booking_id: booking.id, workshop_date: "12-10-12")
      patch :update, params: { id: @workshop_date.id, workshop_dates:
           { workshop_date: "12-12-12" }, format: :json }
      expect(response.body).to include("12-12-12")
    end
  end

  context 'DELETE #delete' do
    it 'can delete a workshop date' do
      @workshop_date = WorkshopDate.create(booking_id: booking.id,
                                           workshop_date: "12-12-12")
      expect do
        delete :destroy, params: { booking_id: booking.id, id: @workshop_date.id }
      end.to change {
        WorkshopDate.count
      }.by(-1)

      expect(response).to have_http_status(204)
    end
  end
end
