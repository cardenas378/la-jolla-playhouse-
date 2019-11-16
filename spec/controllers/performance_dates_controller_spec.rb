require 'rails_helper'

RSpec.describe PerformanceDatesController, type: :controller do
  let(:location) { Location.create(name: "LEARN") }
  let(:booking) do
    Booking.create!(location_id: location.id,
                    contact_first_name: "Pepe")
  end
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(200)
    end

    it 'checks performance_date being created in the response' do
      PerformanceDate.create!(booking_id: booking.id, date: "12-10-12")
      get :index
      expect(response.body).to include("12-10-12")
    end
  end

  context 'POST #create' do
    it 'can create a performance_date' do
      post :create, params: { performance_dates: { booking_id: booking.id,
                                                   date: "12-10-12" }, format: :json }
      expect(response.body).to include("12-10-12")
    end
  end

  context 'PUT #update' do
    it 'can update a performance_date' do
      @performance_date = PerformanceDate.create(booking_id: booking.id, date: "12-10-12")
      patch :update, params: { id: @performance_date.id, performance_dates:
                             { date: "12-15-19" }, format: :json }
      expect(response.body).to include("12-15-19")
    end
  end

  context 'DELETE #delete' do
    it 'can delete a booking' do
      @performance_date = PerformanceDate.create(booking_id: booking.id, date: "12-10-12")
      expect do
        delete :destroy, params: { booking_id: booking.id, id: @performance_date.id }
      end.to change {
        PerformanceDate.count
      }.by(-1)

      expect(response).to have_http_status(204)
    end
  end
end
