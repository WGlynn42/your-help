class AddAvatarToCharities < ActiveRecord::Migration[5.2]
  def change
    add_column :charities, :avatar, :string
  end
end
