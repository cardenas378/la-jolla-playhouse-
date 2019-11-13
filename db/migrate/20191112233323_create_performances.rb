class CreatePerformances < ActiveRecord::Migration[6.0]
  def change
    create_table :performances do |t|
      t.string :date
      t.timestamps
    end
    add_reference :performances, :booking, foreign_key: true
  end
end
