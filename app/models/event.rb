require 'date'

class Event < ApplicationRecord
  validates :title, presence: true
  has_and_belongs_to_many :members

  def self.earlier_events
    @events = Event.where(date: (Date.today << (30*12))..Date.today)
  end

  def self.later_events
    # event Date.parse(:date) > Date.today.prev_day
    @events = Event.where(date: Date.today.prev_day..Date.today >> (30*12)) #to 30 years from now
    @events
  end

  def self.descending
    @events = Event.order('Date DESC')
    @events
  end

  def self.ascending
    @events = Event.order('Date ASC')
    @events
  end

  # make function for returning specific events' registered members

end
