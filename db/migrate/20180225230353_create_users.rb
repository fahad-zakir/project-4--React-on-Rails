class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :city
      t.string :user_photo

      t.timestamps
    end
  end
end
