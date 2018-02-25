class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :photo_url
      t.string :summary
      t.string :longitude
      t.string :latitude
      t.string :country
      t.string :state
      t.string :population
      t.string :city_type

      t.timestamps
    end
  end
end
