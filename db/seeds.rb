# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all
Comment.destroy_all

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

                      Craft beer yr hashtag aesthetic austin. Mixtape aesthetic live-edge XOXO. Literally humblebrag lomo woke XOXO, shoreditch retro hashtag. Tattooed green juice bushwick pop-up, man bun food truck fingerstache direct trade whatever godard letterpress narwhal blue bottle. Aesthetic church-key ramps, cred VHS post-ironic locavore taxidermy copper mug vice etsy enamel pin before they sold out. Enamel pin normcore shabby chic freegan post-ironic, bushwick master cleanse ugh etsy semiotics portland distillery food truck trust fund poutine."

                     })
@post = Post.create!({
                       user_id: '5',
                       title: 'Will there ever be another PewDiePie?',
                       img_url: 'https://pmcvariety.files.wordpress.com/2019/12/pewdiepie.png',
                       content: "I'm baby meggings ramps kitsch, irony activated charcoal fashion axe slow-carb pour-over VHS yr bespoke literally sartorial cold-pressed. Meditation typewriter squid small batch hashtag. You probably haven't heard of them cardigan activated charcoal pop-up art party palo santo blue bottle selfies stumptown pok pok dreamcatcher cred XOXO. Tacos freegan marfa banh mi disrupt.

                     Craft beer yr hashtag aesthetic austin. Mixtape aesthetic live-edge XOXO. Literally humblebrag lomo woke XOXO, shoreditch retro hashtag. Tattooed green juice bushwick pop-up, man bun food truck fingerstache direct trade whatever godard letterpress narwhal blue bottle. Aesthetic church-key ramps, cred VHS post-ironic locavore taxidermy copper mug vice etsy enamel pin before they sold out. Enamel pin normcore shabby chic freegan post-ironic, bushwick master cleanse ugh etsy semiotics portland distillery food truck trust fund poutine."

                     })

@post = Post.create!({
                       user_id: '2',
                       title: 'How to get out of Youtuber Hell',
                       img_url: 'https://i.ytimg.com/vi/qxEwC8vLSD0/maxresdefault.jpg',
                       content: "I'm baby tilde pork belly fanny pack paleo mixtape. Tilde slow-carb gentrify, raclette church-key pop-up celiac fixie typewriter franzen semiotics cold-pressed. Seitan portland slow-carb chicharrones man bun disrupt letterpress. Distillery bespoke YOLO meditation blog deep v, celiac lomo small batch beard.

                       Selvage small batch wayfarers pitchfork heirloom pork belly kogi. Woke palo santo pickled leggings. Fashion axe swag YOLO, tattooed air plant sartorial ramps kitsch vexillologist ethical poke hexagon live-edge cred. Live-edge gentrify neutra truffaut lo-fi banjo."
                     })
@post = Post.create!({
                       user_id: '7',
                       title: 'How i overcame the odds',
                       img_url: 'https://theblogimages.adobe.com/wp-content/uploads/2040/05/669B4E95-5F28-4E3C-ADB5-FB790B5A5BA1.jpeg',
                       content: "I'm baby direct trade echo park wayfarers cold-pressed crucifix small batch vexillologist, kinfolk lo-fi selvage actually tacos schlitz lumbersexual. Tote bag tilde butcher, marfa shoreditch williamsburg snackwave actually synth art party selfies jianbing health goth. Food truck iceland chambray tofu synth 8-bit vaporware listicle twee. Authentic artisan tousled humblebrag vape typewriter jianbing freegan tattooed jean shorts sriracha brunch snackwave biodiesel.

                       Iceland irony tattooed, wayfarers flannel brunch health goth lo-fi. Coloring book etsy PBR&B poke gluten-free, cloud bread shoreditch copper mug shaman cred dreamcatcher hella knausgaard asymmetrical next level. Messenger bag farm-to-table edison bulb offal hashtag. Poke trust fund authentic paleo pour-over, fingerstache cold-pressed messenger bag flannel poutine hammock."
                     })
@post = Post.create!({
                       user_id: '10',
                       title: "You can't succeed if you don't try!",
                       img_url: 'https://images.dailyhive.com/20190911165229/The-Try-Guys-Daily-Hive-1072x555.png',
                       content: "I'm baby biodiesel drinking vinegar banjo flannel post-ironic humblebrag sartorial cred offal cardigan tumeric hell of +1 edison bulb. Yr next level tilde food truck. Everyday carry pour-over bitters raw denim viral try-hard YOLO. Drinking vinegar jean shorts godard, knausgaard selvage farm-to-table mixtape pitchfork offal. Tumblr keytar kinfolk post-ironic, asymmetrical PBR&B helvetica wolf offal bicycle rights.

                       Pabst shabby chic waistcoat kickstarter. Cornhole humblebrag franzen taxidermy yr distillery knausgaard wolf ramps 8-bit bespoke post-ironic af authentic. Ugh pour-over crucifix, leggings activated charcoal copper mug iceland whatever sustainable selvage try-hard. Fam quinoa paleo, wayfarers slow-carb next level succulents waistcoat humblebrag chartreuse fixie offal shabby chic polaroid."
                     })
@post = Post.create!({
                       user_id: '3',
                       title: 'Keeping the integrity of your brand',
                       img_url: 'https://omgeekly.com/wp-content/uploads/2018/04/Philip-Defranco-quitting-youtube-drama.jpg',
                       content: "I'm baby pork belly try-hard seitan, tofu kale chips lomo craft beer bespoke tilde small batch. Pop-up fashion axe four dollar toast palo santo organic cardigan lyft. Trust fund slow-carb listicle keffiyeh photo booth hella vexillologist kitsch shaman unicorn raw denim heirloom whatever. Wolf mlkshk tilde irony XOXO. Chartreuse biodiesel drinking vinegar stumptown umami fixie microdosing photo booth. Chambray taxidermy drinking vinegar, godard cray celiac gastropub fanny pack tofu scenester kogi bicycle rights put a bird on it humblebrag.

                       Wayfarers tofu bushwick neutra trust fund hammock yr, scenester small batch dreamcatcher. Chicharrones blog meditation butcher tattooed hashtag. Next level leggings small batch cred. Banjo enamel pin kogi mumblecore butcher YOLO. Shabby chic wayfarers swag williamsburg, prism vice fashion axe meggings pitchfork blog bitters fanny pack forage. Authentic man bun lumbersexual, quinoa woke pinterest pork belly fam franzen 8-bit slow-carb ugh. Poutine taxidermy locavore kitsch swag next level gluten-free."
                     })
@post = Post.create!({
                       user_id: '8',
                       title: 'Follow your passion, and film it',
                       img_url: 'https://discoverpods.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-30-at-11.59.38-AM.png',
                       content: "I'm baby heirloom jean shorts locavore, ennui migas lumbersexual vegan chambray waistcoat pour-over yr +1 shaman banh mi snackwave. Fashion axe post-ironic narwhal, distillery pinterest authentic irony listicle glossier yuccie letterpress selvage. Hashtag subway tile pabst knausgaard, fingerstache bicycle rights messenger bag schlitz DIY cronut ethical actually tofu offal etsy. Gochujang chicharrones wayfarers raw denim PBR&B vexillologist. Taiyaki yr art party, street art kale chips slow-carb tattooed skateboard pork belly drinking vinegar godard prism flexitarian.

                       3 wolf moon gluten-free narwhal lumbersexual chartreuse tofu echo park tousled taxidermy franzen direct trade raw denim. Asymmetrical adaptogen iPhone, iceland artisan keytar 3 wolf moon activated charcoal skateboard woke snackwave. Vice deep v fam retro raclette jianbing narwhal semiotics kogi typewriter polaroid poutine health goth cardigan meggings. Shaman letterpress adaptogen, hella schlitz live-edge disrupt bespoke try-hard hashtag fixie messenger bag vegan."
                     })
@post = Post.create!({
                       user_id: '9',
                       title: 'How to thrive as a comedian on youtube',
                       img_url: 'https://weartesters.com/wp-content/uploads/2018/07/tom-segura-nike-adidas-beef-hot-ones.jpg',
                       content: "I'm baby skateboard snackwave bushwick mixtape, bitters enamel pin DIY tumeric. Hexagon DIY try-hard hashtag +1 fashion axe master cleanse offal green juice drinking vinegar authentic leggings stumptown. Swag cred salvia edison bulb retro semiotics DIY messenger bag chambray umami tousled asymmetrical live-edge XOXO hot chicken. Listicle 8-bit tote bag PBR&B, +1 salvia disrupt kombucha. Lyft letterpress pork belly health goth meditation occupy celiac. Pabst pork belly seitan gentrify pitchfork blog. Tousled distillery master cleanse woke 3 wolf moon vice godard succulents drinking vinegar vape.

                       Williamsburg viral taxidermy shabby chic selvage beard neutra portland. Pok pok brooklyn enamel pin blue bottle deep v intelligentsia YOLO. Deep v YOLO narwhal everyday carry next level pork belly unicorn butcher. Keytar activated charcoal venmo semiotics aesthetic. Mustache mixtape 8-bit, farm-to-table gluten-free chartreuse PBR&B yr occupy food truck paleo seitan sriracha echo park. Post-ironic drinking vinegar hella kinfolk tousled. Small batch kogi mlkshk lumbersexual ugh hexagon."
                     })
@post = Post.create!({
                       user_id: '11',
                       title: "Just keep at it, trust us it's totally worth it!",
                       img_url: 'https://images-na.ssl-images-amazon.com/images/I/81PSfZQ8y-L._RI_.jpg',
                       content: "I'm baby pour-over cardigan knausgaard shaman, hexagon disrupt portland la croix 3 wolf moon freegan hammock kombucha waistcoat. Hella humblebrag vice polaroid, synth squid chambray mustache single-origin coffee migas chartreuse food truck. 90's gluten-free celiac before they sold out synth, poke pickled banjo lyft cred bespoke whatever 8-bit locavore pour-over. Salvia gochujang portland, tattooed skateboard literally gastropub kombucha. Woke before they sold out live-edge skateboard, asymmetrical chicharrones kitsch pitchfork af cliche cred sriracha chillwave tousled. Crucifix franzen pour-over, jianbing hot chicken normcore locavore trust fund semiotics venmo migas williamsburg. Drinking vinegar seitan fashion axe readymade la croix.

                       Whatever paleo mixtape austin stumptown truffaut shabby chic jean shorts narwhal thundercats humblebrag you probably haven't heard of them. DIY retro next level, tacos coloring book normcore bespoke celiac copper mug lomo selfies. Literally bicycle rights drinking vinegar, typewriter tousled crucifix ennui. Succulents bespoke authentic, pork belly umami street art gochujang blog taxidermy."
                     })
# @post = Post.create!({
#                        user_id: '',
#                        title: '',
#                        img_url: '',
#                        content: ``
#                      })
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
