class CreateItemQuantities < ActiveRecord::Migration[6.0]
  def change
    create_table :item_quantities do |t|
      t.integer :shop_id
      t.integer :item_id
      t.integer :quantity

      t.timestamps
    end
  end
end
