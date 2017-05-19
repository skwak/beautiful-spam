# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

spam = Spam.find_or_create_by(title: "THE BEAUTIFUL PEOPLE they are here for you Bringing You The Spoils of Love You Will Never Get Over It", body: "La")
spam.body =
"When you were young, the thrill of beauty was overpowering.
the thrill of the books, The thrill of the cartoons, the thrill of the classmates, the thrill of the games, the thrill of the people,
but everything fades, and the colors of the
meatspace are no longer vibrant, rather sallow,
but not in a really moving way, not the kind of sallow that is melancholy
and therefore maybe a little sublime because there is a hint of death.
NOOOOO, what you see is a kind of dismal uncoloring that is subdued, only slight depressing,
but it is a slight depression that is like a tiny little headache every day of your life,
that gets stronger every day,
but it's not really all that noticeable
because your pain tolerance grows day by day as well,
maybe affection for animals and the mundanities of daily life are the only things you really,
really look forward to.
By You I Mean Me And By Me I Mean Everyone, and that includes you!!
WE CAN CHANGE THIS WITH A PILL.
This pill magically changes you, so that Beauty is Beauty again.
You feel the THRILLS OF LOVE AND ROMANCE.
Or have the capacity to, at least.
You don't need it in your life, not necessarily, but at least it will provide an
avenue of entertainment for you that is not depraved but the best.
You can feel your heart pounding, the pheremones switch has been turned ON.
You feel idealistic, intrigued at everyday life.
When you wake up in the morning, you wake up with a spring in your feet.
You go to your closet and choose your clothes carefully, to impress.
Music sounds wondrous again.
Art becomes meaningful.
Politics is intriguing.
Relationships are carefully cultivated and how honorable they feel.
Every moment means something.
The beautiful people are here, and you know what beauty is, and you admire it.
You admire it deeply.
You are not at all desperate.
There is just meaning.
Please send me a letter because I really need it right now.
Don't send me any scary ones. read my mind and send me a good one.
I am not taking this pill, and look at me now.

In 1972, General Lily-Eduardo Georges E. Saint Michigan III from the Republic of January visited the Eminent Colonel A.M.D., who suffered from an acute sweating disease.\n
Desperately trying to get rid of his embarrassing predicament, one which made him highly aware of his body from a young age and which
paved his way to the military, as in the military there was constant movement, and most were sweating all of the time or were too engrossed in the
the question of life or death to notice his sweat, which fortunately did not small, merely provide a sheen of grease over his meaty body at all times. You know those people
who put tons of product in their hair, and it's covered in a layer of grease? Just imagine that but on a FACE, a face.

The Colonel met then Governor of Georgia Jimmy Carter at a fundraising dinner for Peanuts For Humanity, and he was grateful for the peanuts everywhere, as he was dripping sweat, which
got into the peanuts at every corners of the mansion, but the sweat was salty, just like the peanuts, and no one noticed. He talked about military battles and politics in Scandinavia as he whipped out a
handkerchief and pretended to blow his nose but was disguising a swipe at the tip of his nose from preventing visible beads of sweat to fall down as he talked, as Jimmy Carter was looking at him with
kind eyes, and that made him feel very vulnerable."
category = Category.find_or_create_by(name: "beauty")
category.spams << spam

Category.find_or_create_by(name: "career")
Category.find_or_create_by(name: "love")
Category.find_or_create_by(name: "age")
Category.find_or_create_by(name: "money")
