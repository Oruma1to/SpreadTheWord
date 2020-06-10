# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# All users are created within this area
@user = User.create!({ username: 'H3H3', email: 'H3H3@youtube.com', password: 'youtube', admin: true })
@user = User.create!({ username: 'JonTron', email: 'JonTron@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'PhillyD', email: 'PhillyD@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'Ninja', email: 'Ninja@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'PewDiePie', email: 'PewDiePie@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'Markiplier', email: 'Markiplier@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'LilySingh', email: 'LilySingh@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'JoeRogan', email: 'JoeRogan@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'TomSegura', email: 'TomSegura@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'TryGuys', email: 'TryGuys@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'WorthIt', email: 'WorthIt@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'FoodWishes', email: 'FoodWishes@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'MrBeast', email: 'MrBeast@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'DudePerfect', email: 'DudePerfect@youtube.com', password: 'youtube', admin: false })
@user = User.create!({ username: 'J360', email: 'J360@youtube.com', password: 'youtube', admin: true })
@user = User.create!({ username: 'MoonMoon', email: 'MoonMoon@youtube.com', password: 'youtube', admin: true })

# All posts are to be generated here
@post = Post.create!({
                       user_id: '1',
                       title: 'How Goofs and Gaffs lead to millions of Laughs',
                       img_url: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/16B16/production/_97505929_h3h3_976.jpg',
                       content: "I'm baby meggings ramps kitsch, irony activated charcoal fashion axe slow-carb pour-over VHS yr bespoke literally sartorial cold-pressed. Meditation typewriter squid small batch hashtag. You probably haven't heard of them cardigan activated charcoal pop-up art party palo santo blue bottle selfies stumptown pok pok dreamcatcher cred XOXO. Tacos freegan marfa banh mi disrupt.

                      Craft beer yr hashtag aesthetic austin. Mixtape aesthetic live-edge XOXO. Literally humblebrag lomo woke XOXO, shoreditch retro hashtag. Tattooed green juice bushwick pop-up, man bun food truck fingerstache direct trade whatever godard letterpress narwhal blue bottle. Aesthetic church-key ramps, cred VHS post-ironic locavore taxidermy copper mug vice etsy enamel pin before they sold out. Enamel pin normcore shabby chic freegan post-ironic, bushwick master cleanse ugh etsy semiotics portland distillery food truck trust fund poutine.

                      Biodiesel typewriter keytar, listicle snackwave 8-bit subway tile vegan tofu hammock. Fashion axe tacos disrupt, unicorn slow-carb glossier coloring book sriracha cliche dreamcatcher hell of you probably haven't heard of them chia salvia paleo. Stumptown blue bottle umami put a bird on it aesthetic. Tofu blue bottle skateboard, art party hashtag ennui vape hot chicken etsy. Man bun narwhal helvetica, occupy meh 90's readymade man braid. Banjo shabby chic cred vaporware narwhal. Cliche distillery plaid kogi fashion axe fixie VHS enamel pin twee tumeric microdosing tilde photo booth vice chicharrones.

                      Beard plaid woke art party, humblebrag pok pok scenester XOXO pug. Flexitarian ennui occupy, pitchfork affogato stumptown listicle normcore kale chips tote bag. Squid prism leggings, brooklyn williamsburg ethical chillwave tilde woke fam. Irony hoodie kombucha, XOXO stumptown cliche messenger bag. Gluten-free leggings raclette synth brunch.

                      Mlkshk jean shorts lomo banjo microdosing vice VHS brunch retro williamsburg hot chicken sriracha vaporware paleo. Glossier copper mug gochujang, scenester sustainable brunch organic bespoke 8-bit. Vice post-ironic drinking vinegar austin portland listicle yr. Fixie tote bag meggings tattooed, mixtape neutra vegan chillwave palo santo franzen hell of. Small batch kale chips art party hoodie XOXO activated charcoal."

                     })
@post = Post.create!({
                       user_id: '5',
                       title: 'How Goofs and Gaffs lead to millions of Laughs',
                       img_url: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/16B16/production/_97505929_h3h3_976.jpg',
                       content: "I'm baby meggings ramps kitsch, irony activated charcoal fashion axe slow-carb pour-over VHS yr bespoke literally sartorial cold-pressed. Meditation typewriter squid small batch hashtag. You probably haven't heard of them cardigan activated charcoal pop-up art party palo santo blue bottle selfies stumptown pok pok dreamcatcher cred XOXO. Tacos freegan marfa banh mi disrupt.

                     Craft beer yr hashtag aesthetic austin. Mixtape aesthetic live-edge XOXO. Literally humblebrag lomo woke XOXO, shoreditch retro hashtag. Tattooed green juice bushwick pop-up, man bun food truck fingerstache direct trade whatever godard letterpress narwhal blue bottle. Aesthetic church-key ramps, cred VHS post-ironic locavore taxidermy copper mug vice etsy enamel pin before they sold out. Enamel pin normcore shabby chic freegan post-ironic, bushwick master cleanse ugh etsy semiotics portland distillery food truck trust fund poutine."

                     })

# All comments are to be generated here
@comment = Comment.create!({
                             "user_id": 1,
                             "post_id": 1,
                             "content": 'Beard plaid woke art party, humblebrag pok pok scenester XOXO pug. Flexitarian ennui occupy, pitchfork affogato stumptown listicle normcore kale chips tote bag. Squid prism leggings, brooklyn williamsburg ethical chillwave tilde woke fam. Irony hoodie kombucha, XOXO stumptown cliche messenger bag. Gluten-free leggings raclette synth brunch indeed!.'

                           })
@comment = Comment.create!({
                             "user_id": 4,
                             "post_id": 1,
                             "content": 'Craft beer yr hashtag aesthetic austin. Mixtape aesthetic live-edge XOXO. Literally humblebrag lomo woke XOXO, shoreditch retro hashtag. Tattooed green juice bushwick pop-up, man bun food truck fingerstache direct trade whatever godard letterpress narwhal blue bottle. Aesthetic church-key ramps, cred VHS post-ironic locavore taxidermy copper mug vice etsy enamel pin before they sold out. Enamel pin normcore shabby chic freegan post-ironic, bushwick master cleanse ugh etsy semiotics portland distillery food truck trust fund poutine.'

                           })

@comment = Comment.create!({
                             "user_id": 1,
                             "post_id": 2,
                             "content": 'Craft beer yr hashtag aesthetic austin. Mixtape aesthetic live-edge XOXO. Literally humblebrag lomo woke XOXO, shoreditch retro hashtag. Tattooed green juice bushwick pop-up, man bun food truck fingerstache direct trade whatever godard letterpress narwhal blue bottle. Aesthetic church-key ramps, cred VHS post-ironic locavore taxidermy copper mug vice etsy enamel pin before they sold out. Enamel pin normcore shabby chic freegan post-ironic, bushwick master cleanse ugh etsy semiotics portland distillery food truck trust fund poutine.'

                           })
