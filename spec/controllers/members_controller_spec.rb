require 'rails_helper'

RSpec.describe MembersController, type: :controller do
  describe 'create' do
    it 'should create a new member' do
      member = Member.create(email: "email@email.com", password: "1234", first_name: "Test", last_name: "Johnson", phone_number: 7, graduation_year: 2019, major: "Testing", points:10)
      get :create,  params: {id: member.id}
      expect{response}.not_to raise_error
    end
  end

  describe 'destroy' do
    it 'should destroy an existing member' do
      member = Member.create(email: "email@email.com", password: "1234", first_name: "Test", last_name: "Johnson", phone_number: 7, graduation_year: 2019, major: "Testing", points:10)
      get :destroy, params: {id: member.id}

      members_left = Member.all
      members_left.each do |m|
        expect(m.first_name).to_not eq("Test")
      end
    end
  end

  describe 'update' do
    it 'should update an existing member' do
      member = Member.create(email: "email@email.com", password: "1234", first_name: "Test", last_name: "Johnson", phone_number: 7, graduation_year: 2019, major: "Testing", points:10)
      get :update, params: {id: member.id}
      expect{response}.not_to raise_error
    end
  end

  describe 'index' do
    it 'should show existing members' do
      member = Member.create(email: "email@email.com", password: "1234", first_name: "Test", last_name: "Johnson", phone_number: 7, graduation_year: 2019, major: "Testing", points:10)
      get :index, params: {id: member.id}
      expect{response}.not_to raise_error
    end
  end

  describe 'show' do
    it 'should show an existing member' do
      member = Member.create(email: "email@email.com", password: "1234", first_name: "Test", last_name: "Johnson", phone_number: 7, graduation_year: 2019, major: "Testing", points:10)
      get :show, params: {id: member.id}
      expect{response}.not_to raise_error
    end
  end
end