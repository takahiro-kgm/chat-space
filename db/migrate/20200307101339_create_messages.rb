class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.string :image
      t.references :group, freign_key: true
      t.references :user, freign_key: true
      t.timestamps
    end
  end
end
