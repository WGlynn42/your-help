class Event < ApplicationRecord

  validates :name, presence: true
  validates :description, presence: true
  validates :event_date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :venue, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true

  belongs_to :charity
  has_many :signups
  has_many :users, through: :signups
end

def formatTime
  return event.time("%Y%m%d")
end
