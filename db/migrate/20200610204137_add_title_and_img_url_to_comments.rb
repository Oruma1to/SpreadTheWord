class AddTitleAndImgUrlToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :title, :string
    add_column :comments, :img_url, :string
  end
end
