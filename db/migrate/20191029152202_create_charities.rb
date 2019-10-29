class CreateCharities < ActiveRecord::Migration[5.2]
  def change
    create_table :charities do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :phone, null: false
      t.string :email, null: false
      t.string :website, null: false
      t.string :donation_page
      t.string :photo, null: false
      t.string :contact_name, null: false
      t.string :contact_role, null: false
      t.string :contact_phone, null: false
      t.string :contact_email, null: false
      t.text :mission_statement, null: false


      t.timestamps
    end
  end
end
