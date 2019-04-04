require 'date'

class Event < ApplicationRecord
  validates :title, presence: true
  has_and_belongs_to_many :members

  def self.later_events
    # event Date.parse(:date) > Date.today.prev_day
    @events = Event.where(date: Date.today.prev_day..Date.today >> (30*12)) #prev_day to 30 years from now
    @events
  end

end
