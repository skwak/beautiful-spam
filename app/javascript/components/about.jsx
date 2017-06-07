import React from 'react';

const About = (props) => {
  // console.log(`state from About: ${this.state}`);
  return (
    <div className="about">
      <p className="about--text">
        When I am very desperate for something, I will occasionally check my spam box.
        I seek to have nearly-missed some kind of communication that mistakenly made its
        way into my spam.
      </p>

      <p className="about--text">
        But what happens is that I will not find anything. And even though I know that
        I need not click, I do anyway on the more interesting spam titles without attachments,
        because I am there anyway. I might as well see. Maybe it will be interesting.
        Maybe I will discover a spam that is not really a spam, even though it certainly looks like a spam.
        Maybe I will forget myself for just a little bit.
      </p>

      <p className="about--text">
        Sometimes there is a kind of beauty I see in these emails, in the strange wordings that
        tug at basic human desires, without much intentional beauty,
        naked in their intentions and their committal to bypass
        the filters they failed to bypass.
      </p>

      <p className="about--text">
        But the beauty drifts away once I realize some kind of faceless entity
        sees me as a faceless entity to be sent mostly meaningless messages to.
        I am not special. I have never been special,
        and there is no magic in the world, I tell myself. The world is mundane, and it is hard,
        although it can be nice sometimes, too, but I did not want to be reminded of any of that
        or to think about any of that.
      </p>

      <p className="about--text">
        If I was special, if there was magic in the world,
        these are the spam emails I would receive, and I wouldn't have written them
        myself, although it was nice to write these, though not as good as if someone
        else had and sent them just for me, the way somehow cooking is done for other people,
        and how food tastes more delicious when someone has made something just for you, even
        if you could make it for yourself if you wanted.
        I began this as a set of titles on Are.na (https://www.are.na/stephanie-kwak/spam-subject-lines-i-d-want-to-receive),
        and I felt the urge of the common feelings.
      </p>
      <p>
        This is the spam I'd get, after deeply hoping and almost giving up,
        but then getting them before I got sarcastic, weary, hopeless.
        In this universe, I get everything I want, but only after a little struggle
        that makes me grateful, makes the crescendo towards joy and delight ever so
        magical.
      </p>

      <p className="about--text">
        I wanna be ironic, not wear my heart on my sleeve, even if it makes me feel a little
        lonely at all times, as if I'm wearing a pillow bodysuit.
        But everyone knows I am a gentle being, if a little complex and misguided sometimes.
        I do not desire to be understood by the masses or even a generation, but a demographic sliver.
        Do not blame me. Blame the Baby Boomers for the full commodification, branding, and marketing
        of the self.
        My padding is my shade of millennial pink representing my commercial viability.
        Remember when people wore sweatpants with <span className="about--pink">PINK</span> on the butt?
        Those were weird times. Maybe it's still happening in another universe.
      </p>

      <p className="about--text">
        I would be more explicit, and give you some more stuctured meaning, but I am trying to be spam here. This is my job, and
        my excuse to be able to do stream-of-consciousness writing.
      </p>

      <div className="about--close"
           onClick={(e) => {
             e.preventDefault()
             props.onAboutMinimizeClick();
           }
      }>
        <div className="about--close__in-case-you-didnt-get-it">
          X
        </div>
        x_tremely straightedge_x
      </div>
    </div>
  )
}

export default About;
