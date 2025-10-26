import React from 'react'
import SubpageWrapper from '../../subpage-wrapper'
import Subpage from '../../subpage'
import BlogsWrapper from './blogs-wrapper'
import { Subscribe } from '../subscribe'

export const MaineBlog = () => {

  return (
    <SubpageWrapper>
      <Subpage>
        <BlogsWrapper>
          <div>
            <h3>
              The Hayward Help
            </h3>
            <h5>
              May 20, 2025
            </h5>

            <p>
              Have you ever enjoyed the solemn silence as you experiment with a task you haven’t done in a while? For example, building a fire.  Lincoln log or teepee? A couple minutes and a few fumbles later, maybe you hear “hey, mind if I show ya how to do it?”. Just as you found your path, some asshole shows up and steals your thunder.
            </p>
            <p>
              You have suffered from what my partner calls the “Hayward help”. My childhood memories are littered with endless examples of my dad showing me the “right” way to do things. Most of the time, I was on the path to mess up a project or hurt myself. Most of the time, I was pissed and didn’t want any help. It is these experiences, where we are allowed to experiment undisturbed, that really solidify knowledge. So you’d think, given how annoyed this made me, I would grow up to let others learn on their own. If you’ve spent more than 30 minutes with me, you know this is not the case. I inherited the Hayward help.
            </p>
            <p>
              This story isn’t unique, everyone’s dad probably did this to some degree. But I promise we’re special. I was once voted “most likely to explain to rules to a sport they’ve never played”. Ouch. As I’ve gotten older, I’ve grappled with this hereditary characteristic, often leading me to wonder “Am I a serial mansplainer?” Maybe. Lately I’ve started taking a conscience approach with my urge to help others (or at least trying to).
            </p>
            <p>
              Let’s take a quick story break — I cannot make this up. I’m currently writing this from a plane, and as I was writing, I noticed the woman next to me, who was probably in her late 60s, struggling to connect to the airplane wifi. I let her wiggle for a moment, and made the judgement decision that this was not a learning moment. I politely asked her if she would like some help, and she graciously accepted. I don’t know what it is, but I get this little rush from helping others. Is it the external validation? A blind confidence? Or the energy shift when you notice your help has made an impact on someone? It makes me feel really good, the difficult part is making sure others leave the interaction feeling good too.
            </p>
            <p>
              ————————————
            </p>
            <p>
              When I was 10, my parents remodeled our childhood home. Like most families, we moved out while the renovations took place. Unlike most families, we moved into our back yard. Unlike most families, my dad lead the whole project. He drew up the plans with our neighbor who was an architect. He hired his friends who were contractors, plumbers, and electricians to help when needed. Most days, however, it was just him (with me in tow, wearing my matching tool-belt). I was probably more nuisance than help, but I certainly learned a lot. Towards the end, my brother and I had the tall task of cutting and beveling all the boards for our hardwood floors. We made them by ripping quarter inch plywood into one-by-eight foot planks, then beveling the edges of each plank with a disk sander. I still remember that disk sander sending me flying a few times. Where was the help when I needed it most!
            </p>
            <p>
              Eighteen months later, we moved from the backyard back into the house. I was so proud of my dad — Looking back I’m pretty sure my whole elementary school knew that he built our house by hand.
            </p>
            <p>
              Eighteen years later (nearly), I’m on a flight back from Maine, where my older brother lives. Him and his fiancé just bought a house, and they’ve embarked on the inherited journey of remodeling it themselves. As we strolled through the streets of Portland, my brother and his fiancé regularly made remarks about the houses they liked. “Did you see the cedar shingles on that one?” It was fun to see my brother in an obsessive state, because the same thing happens to me. The drive and passion is so infectious!
            </p>
            <p>
              My brother’s house was built in the 1910s, and needs a heavy refresh before they can move in. During my five day stay in Maine, we set the goal of removing a shoddy addition that was added to the original house at some point in the 30s. We spent four days wielding crowbars and sledge hammers, before winching the addition off the original house. My brother has never remodeled a home before, but I was impressed with how knowledgeable he was. Most of the work felt relatively self explanatory, but I also found myself falling into patterns of my childhood. Asking for help when I felt stuck, with my older brother to the rescue! Who does he ask when he doesn’t know what to do next?
            </p>
            <p>
              With my very own set of blisters, I return to the cushy life of renting an apartment. The reward of physical labor is something I deeply miss, especially in my current job as a software engineer. I find much more satisfaction interacting with the physical world to than the digital world, though this one may be an exception :). Of course, this all comes from a place of privilege — as many people who work in construction are undocumented, without the choice to work a desk job.
            </p>
            <p>
              Looking back, my dad has certainly earned his right to utilize the Hayward help against me, and my brother is well on his way. I return home inspired to embark on my own house-building journey. Whether I will actually do it, that’s up for debate. Regardless, I feel inspired to continue to make time to tinker and interact with the physical world.
            </p>
            <div className="blog-photos">
              <img src={process.env.PUBLIC_URL + '/blog/maine.jpg'} alt={'amsterdam skyline'} />
            </div>
          </div>
        </BlogsWrapper>
        <Subscribe />
      </Subpage>
    </SubpageWrapper>
  )
}


export default MaineBlog
