class Booking < ApplicationRecord
  belongs_to :location
  has_many :performance_dates
  has_many :workshop_dates
end
