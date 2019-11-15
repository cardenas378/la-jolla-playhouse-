require 'rails_helper'

RSpec.describe WorkshopDateController, type: :controller do
  let!(:location) { Location.create(name: "LEARN") }
  let!(:bookings) { Booking.create(contact_first_name: "Juany")}
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(200)
    end

    it 'checks workshop date being created in the response' do
    WorkshopDate.create(location_id: location.id, booking_id: booking.id, contact_first_name: "Nico")
      get :index
      expect(response.body).to include("Nico")
    end
  end

  context 'POST #create' do
    it 'can create a workshop date' do
      post :create, params: { booking: { location_id: location.id, booking_id: booking.id,
                                         contact_first_name: "Nico" }, format: :json }
      expect(response.body).to include("Nico")
    end
  end

  context 'PUT #update' do
    it 'can update a workshop date' do
      @booking = Booking.create(location_id: location.id, contact_first_name: "Nico")
      patch :update, params: { id: @booking.id, booking:
           { contact_first_name: "Adam" }, format: :json }
      expect(response.body).to include("Adam")
    end
  end

  context 'DELETE #delete' do
    it 'can delete a workshop date' do
      @booking = Booking.create(location_id: location.id, booking_id: booking.id, contact_first_name: "Nico")
      expect do
        delete :destroy, params: { location_id: location.id, id: @booking.id }
      end.to change {
      WorkshopDate.count
      }.by(-1)

      expect(response).to have_http_status(204)
    end
  end
end
