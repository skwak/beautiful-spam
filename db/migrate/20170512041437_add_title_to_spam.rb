class AddTitleToSpam < ActiveRecord::Migration[5.1]
  def change
    add_column :spams, :title, :string
  end
end
