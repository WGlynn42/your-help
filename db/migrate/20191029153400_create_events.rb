class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|

      t.string :name, null: false
      t.text :description, null: false
      t.date :event_date, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.string :venue, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :venue_website
      t.string :event_page
      t.string :event_photo

      t.belongs_to :charity

      t.timestamps
    end
  end
end
