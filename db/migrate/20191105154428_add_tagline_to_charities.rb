class AddTaglineToCharities < ActiveRecord::Migration[5.2]
  def change
    add_column :charities, :tagline, :text
  end
end
