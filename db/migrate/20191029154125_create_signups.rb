class CreateSignups < ActiveRecord::Migration[5.2]
  def change
    create_table :signups do |t|

      t.belongs_to :user
      t.belongs_to :event

      t.timestamps
    end
  end
end
