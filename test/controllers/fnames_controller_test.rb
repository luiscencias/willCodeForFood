require 'test_helper'

class FnamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fname = fnames(:one)
  end

  test "should get index" do
    get fnames_url, as: :json
    assert_response :success
  end

  test "should create fname" do
    assert_difference('Fname.count') do
      post fnames_url, params: { fname: { email: @fname.email, lname: @fname.lname, subject: @fname.subject } }, as: :json
    end

    assert_response 201
  end

  test "should show fname" do
    get fname_url(@fname), as: :json
    assert_response :success
  end

  test "should update fname" do
    patch fname_url(@fname), params: { fname: { email: @fname.email, lname: @fname.lname, subject: @fname.subject } }, as: :json
    assert_response 200
  end

  test "should destroy fname" do
    assert_difference('Fname.count', -1) do
      delete fname_url(@fname), as: :json
    end

    assert_response 204
  end
end
