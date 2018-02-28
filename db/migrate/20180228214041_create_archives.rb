class CreateArchives < ActiveRecord::Migration[5.1]
  def change
    create_table :archives do |t|
      t.string :name
      t.string :liveURL
      t.string :githubURL
      t.string :previewURL
      t.string :iconURL

      t.timestamps
    end
  end
end
