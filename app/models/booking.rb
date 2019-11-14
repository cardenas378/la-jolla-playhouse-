class Booking < ApplicationRecord
  belongs_to :location
  has_many :performance_dates
end
