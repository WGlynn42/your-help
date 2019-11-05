# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_05_154428) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "charities", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "phone", null: false
    t.string "email", null: false
    t.string "website", null: false
    t.string "donation_page"
    t.string "photo", null: false
    t.string "contact_name", null: false
    t.string "contact_role", null: false
    t.string "contact_phone", null: false
    t.string "contact_email", null: false
    t.text "mission_statement", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar"
    t.text "tagline"
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.date "event_date", null: false
    t.string "start_time", null: false
    t.string "end_time", null: false
    t.string "venue", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "venue_website"
    t.string "event_page"
    t.string "event_photo"
    t.bigint "charity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["charity_id"], name: "index_events_on_charity_id"
  end

  create_table "signups", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_signups_on_event_id"
    t.index ["user_id"], name: "index_signups_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
