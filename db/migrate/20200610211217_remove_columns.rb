# frozen_string_literal: true

class RemoveColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :title, :string
    remove_column :comments, :img_url, :string
  end
end
