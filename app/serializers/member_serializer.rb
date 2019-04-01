class MemberSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :first_name, :last_name, :phone_number, :graduation_year, :major, :is_member, :points

end
