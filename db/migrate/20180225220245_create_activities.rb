class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :photo_url
      t.string :activity_type
      t.string :summary
      t.string :age_requirement
      t.string :admission_cost
      t.references :city, foreign_key: true

      t.timestamps
    end
  end
end
