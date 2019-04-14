class MemberSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :first_name, :last_name, :phone_number, :graduation_year, :major, :member_status, :points

end
