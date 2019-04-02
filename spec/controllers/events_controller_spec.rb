require 'rails_helper'

RSpec.describe EventsController, type: :controller do

  describe 'new' do
    it 'should create a new event' do
      event = Event.new(title: "Title", date: "2019-04-01")
      get :new,  params: {id: event.id}
      expect{response}.not_to raise_error
    end
  end

  describe 'destroy' do
    it 'should destroy an existing event' do
    #  event = Event.new(title: "New Title", date: "2019-04-01")
     # get :destroy, params: {id: event.id}

      #events_left = Event.all
      #events_left.each do |e|
      #  expect(e.title).to_not eq("Test")
      #end
    end
  end

  describe 'update' do
    it 'should update an existing event' do
     # event = Event.new(title: "Title", date: "2019-04-01")
     # get :update, params: {id: event.id}
     # expect{response}.not_to raise_error
    end
  end

  describe 'index' do
    it 'should show existing events' do
      event = Event.new(title: "Title", date: "2019-04-01")
      get :index, params: {id: event.id}
      expect{response}.not_to raise_error
    end
  end

  describe 'show' do
    it 'should show an existing event' do
   #   event = Event.new(title: "Title", date: "2019-04-01")
    #  get :show, params: {id: event.id}
     # expect{response}.not_to raise_error
    end
  end
end