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

In 1972, Lily-Eduardo Georges E. Saint Michigan III from the Republic of January visited the Eminent Colonel A.M.D., who suffered from an acute sweating disease.\n
Desperately trying to get rid of his embarrassing predicament, one which made him highly aware of his body from a young age and which
paved his way to the military, as in the military there was constant movement, and most were sweating all of the time or were too engrossed in the
the question of life or death to notice his sweat, which fortunately did not small, merely provide a sheen of grease over his meaty body at all times. You know those people
who put tons of product in their hair, and it's covered in a layer of grease? Just imagine that but on a FACE, a face.

Lily-Eduardo Georges E. Saint Michigan III met then-Governor of Georgia Jimmy Carter at a fundraising dinner for Peanuts For Humanity, and he was grateful for the peanuts everywhere, as he was dripping sweat, which
got into the peanuts at every corners of the mansion, but the sweat was salty, just like the peanuts, and no one noticed. He talked about military battles and politics in Scandinavia as he whipped out a
handkerchief and pretended to blow his nose but was disguising a swipe at the tip of his nose from preventing visible beads of sweat to fall down as he talked, as Jimmy Carter was looking at him with
kind eyes, and that made him feel very vulnerable.

Lily-Eduardo Georges E. Saint Michigan III was born at the wrong time, before your sweat glands could be removed forever. Human natural selection and evolution mean nothing sometimes."
beauty_category = Category.find_or_create_by(name: "beauty")
beauty_category.spams << spam

life_category = Category.find_or_create_by(name: "life")
life_spam = Spam.find_or_create_by(title: "I wanna be distracted")
life_spam.body =
"Why kind of life do you want to live?
I bet you want to live a good and happy life.
The surveys told that to me.
But words are meaningless, and pills are real.
Most pills make you sedated,
this pills keeps you focused on the good things,
and distracted away from the bad things,
which means...The Good Moments are slow and memorably\e,
the rest is swift, but you learn from it,
the good moments are in much larger proportion than the other times,
the boring times productive and yet not terribly memorable,
'I wanna be memorable,
Bah bah bah bah bah,'
that's every song I've heard once.
You wanna practice self-care,
You also want things from others,
You wanna be known for generosity and cleverness and uniqueness,
without being called a black sheep or be weird in a bad way,
that line seems really a wavy line,
sometimes the people most empathetic are in the future,
or they're already dead,
maybe all culture is like that,
a scattering sound,
and in a life it's looping.
You hope to live a line sloping up,
looping, sloping up, grander and grander until it seems linear,
with the very best in science that your ancestors wanted for themselves,
they give it to you,
not out of selflessness,
but because they needed to make money, and it was way to make money, and life is
addictive because it's all we got."
life_category.spams << life_spam

Category.find_or_create_by(name: "career")

love_category = Category.find_or_create_by(name: "love")
love_spam = Spam.find_or_create_by(title: "You are not small and meaningless. You are actually the One!")
love_category.spams << love_spam

age_category = Category.find_or_create_by(name: "age")
age_spam = Spam.find_or_create_by(title: "BE YOU FOREVER! but not really forever, you can turn on and off at your leisure")
age_spam.body =
"The Internet feels scattered and strange, just like you. Do you know what came first? It's an age-old question, a chicken and the egg.

Am I scattered and strange because of the Internet, or did the Internet make me scattered and strange? I hear the tree falling in the forest,
as I examine my body and face for any signs of age.

Did you know we all die?
In a way, it is comforting.
Life is very tedious, and perhaps for most, it is not very nice.
But we know nothing else, and the idea of non-being, worse than the idea of un-being,
is a scary thought, one that has the Google people perplexed and attempting to make us live forever.
Can I tell you that this is not the right way to go about this problem of WRINKLES and a body that makes the word 'meatspace'
ever so real.

The fountain of youth is here, but it stops at the good parts, parts that may extend past youth, so that you may be the
best version of yourself at all times.
Some people, for instance, look strangely better later in life than they did a younger ages.
Some people look better with wrinkles, their face sagging just so, like a well-draped table.
A table that is made of wood that looks different now, but maybe better than at its so-called prime.
You are not a vampire, however. It will stop at sometime, but only when you are ready for it and want it.
Sip in this luxury stew like Mr. Scrooge in coins."
age_category.spams << age_spam

money_category = Category.find_or_create_by(name: "money")
money_spam = Spam.find_or_create_by(title: "Be Donald Duck but without being addicted to money or bad things")
money_spam.body =
"My high school teacher taught us psychology from all the things she learned on talk shows.
Some of these lessons I still haven't shaken. They cling to me as a memory, which is real, and I haven't yet
scanned the Internet for the specific un-truth I don't know is false.
But one thing I remember for her class of Ricki Lake and Phil Donahue, before The View was out,
is that money changes people in bad ways, like Donald Duck.

Donald Duck is greedy and swims in coins, which is a very interesting visual concept, haunting even,
but not something I actually want to live because I am physical, and coins hurt.

When people get a lot of money, and don't live simply, they usually become bad because they turn to the wrong
things to keep their sense of elevation, instead of remembering that they die and get old, and the joys that are
lasting are good food, honest companionship, and being entertained and distracted by it all by something,
something that hopefully other people think of as meaningful and not meaningless, something that
brings beauty to us.

I am a life coach.
I believe in this one route.
If my route sounds good to you, you should contact me.
But make sure you have enough money because I am a coach because I need money, too.
Otherwise, I don't know what I would do. I wouldn't do this just for fun,
although maybe I would because a permanent vacation does sound boring because
I never do anything unless I'm forced to.
  
So hopefully you are rich, but you don't know what to do with it, and in that case I can help you.
I have not yet been in your circumstance yet, but with your help, I can be, and that would be
even better because I can try to follow my route and amend it specifically to help you later.
Smash the subscribe button because I rely on advertisement money, as well.
This will also help me in my destination as a life coach."
money_category.spams << money_spam
