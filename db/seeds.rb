# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# All users are created within this area
@user = User.create({ username: 'H3H3', email: 'H3H3@youtube.com', password: 'youtube', admin: true })
@user = User.create({ username: 'JonTron', email: 'JonTron@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'PhillyD', email: 'PhillyD@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'Ninja', email: 'Ninja@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'PewDiePie', email: 'PewDiePie@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'Markiplier', email: 'Markiplier@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'LilySingh', email: 'LilySingh@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'JoeRogan', email: 'JoeRogan@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'TomSegura', email: 'TomSegura@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'TryGuys', email: 'TryGuys@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'WorthIt', email: 'WorthIt@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'FoodWishes', email: 'FoodWishes@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'MrBeast', email: 'MrBeast@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'DudePerfect', email: 'DudePerfect@youtube.com', password: 'youtube', admin: false })
@user = User.create({ username: 'J360', email: 'J360@youtube.com', password: 'youtube', admin: true })
@user = User.create({ username: 'MoonMoon', email: 'MoonMoon@youtube.com', password: 'youtube', admin: true })


# All posts are to be generated here
@post = Post.create({ 
  username: 'H3H3',
  Title: 'How Goofs and Gaffs lead to millions of Laughs',
  img_url: '',
  
  })

# All comments are to be generated here
