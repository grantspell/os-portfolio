class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :liveURL
      t.string :githubURL
      t.string :previewURL
      t.string :iconURL

      t.timestamps
    end
  end
end
