class Charity < ApplicationRecord

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
  validates :phone, presence: true
  validates :email, presence: true
  validates :website, presence: true
  validates :photo, presence: true
  validates :contact_name, presence: true
  validates :contact_role, presence: true
  validates :contact_phone, presence: true
  validates :contact_email, presence: true
  validates :mission_statement, presence: true

  has_many :events

  mount_uploader :avatar, AvatarUploader

  def address2
    "#{city}, #{state} #{zip}"
  end

end
