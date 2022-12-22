# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2018_02_25_230500) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.string "photo_url"
    t.string "activity_type"
    t.string "summary"
    t.string "age_requirement"
    t.string "admission_cost"
    t.bigint "city_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["city_id"], name: "index_activities_on_city_id"
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.string "photo_url"
    t.string "summary"
    t.string "longitude"
    t.string "latitude"
    t.string "country"
    t.string "state"
    t.string "population"
    t.string "city_type"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "body"
    t.bigint "user_id"
    t.bigint "activity_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["activity_id"], name: "index_comments_on_activity_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "user_photo"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  add_foreign_key "activities", "cities"
  add_foreign_key "comments", "activities"
  add_foreign_key "comments", "users"
end
