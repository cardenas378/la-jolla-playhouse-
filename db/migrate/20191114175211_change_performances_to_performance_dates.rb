class ChangePerformancesToPerformanceDates < ActiveRecord::Migration[6.0]
  def change
    rename_table :performances, :performance_dates
  end
end
