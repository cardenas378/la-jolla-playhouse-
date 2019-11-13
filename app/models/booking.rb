class Booking < ApplicationRecord
  belongs_to :location
  has_many :performances
end
