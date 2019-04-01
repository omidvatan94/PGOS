class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :coffee
      t.string :brew_method
      t.date :ship_date
      t.integer :cases
      t.integer :packets_per
      t.string :notes
      t.boolean :priority
      t.timestamps
    end
  end
end
