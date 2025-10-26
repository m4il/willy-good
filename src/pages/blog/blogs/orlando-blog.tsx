import React from 'react'
import SubpageWrapper from '../../subpage-wrapper'
import Subpage from '../../subpage'
import BlogsWrapper from './blogs-wrapper'
import { Subscribe } from '../subscribe'

export const OrlandoBlog = () => {
  return (
    <SubpageWrapper>
      <Subpage>
        <BlogsWrapper>
          <div>
            <div>
            </div>
            <h3>
              The Happiest Place on Earth
            </h3>
            <h5>
              May 14, 2025
            </h5>
            <p>Monday morning came early with a 4:30am wake up call. I had a flight to Orlando, and in just a few hours I would be in a matching t-shirt at the happiest place on earth. Nope, not Disneyland — an all hands company offsite. Forget the turkey legs and amusement park rides, this week would be full of continental breakfasts and uncomfortable swims with your coworkers in the hotel pool.</p>
            <p>Last Friday, my manager informed me she was leaving our company. Her departure marked the 5th senior departure in the last 6 months, all of whom went to the same competitor. My relationahip with my boss was pretty unique, and she is the reason I've spent the last (nearly) four years working where I do. As you can imagine, I'm sad to see her go. During an activity at the work offsite, a coworker and I submitted a question about these senior departures “Will we weather this storm? Or is the ship sinking?” The question went unanswered, or so we thought.        </p>
            <p>Spending 48 hours in a hotel with 300 of your closest coworkers is a funny thing. You start your days weaving your way through hotel hallways and confiding in a plate of powered eggs, bracing for a long day of lectures. At one point, I was quite disoriented. I had no clue what time of day it was. I looked around — the conference room had no windows and no clocks, but was equipped with plenty of free drinks. In this casino, you don’t gamble your money, you gamble your time.
            </p>
            <p>One afternoon, we hit the jackpot. The prize? One hour of free time. Eight hours in a windowless conference room with all you can drink coffee gets a good sweat going, and makes for a great warm up for the gym. Many of my coworkers had the same idea, and competition for the free-weights was fierce. I nearly got caught in a squatting competition between Brad and Chad (actual names of my coworkers), so I blacked out (due to social anxiety) and found myself strapped into a peloton rowing machine. I had never rowed before and, for some odd reason, this felt like a good moment to learn.
            </p>
            <p>Because Orlando has a shortage of amusement parks, we spent our evenings at a glorified Dave & Busters where we alternated our fingers between bowling balls and finger food. They also had laser tag, which left one of our Product Managers with a broken nose. No joke! She woke up the next day with two black eyes. When it came time for dinner, I hard passed on the isr**li couscous and went for the genocide-free garden salad. Between the bowling, broken noses, and culturally appropriated maftoul, I had some lovely conversations with a few of my coworkers. If only there wasn’t a fifteen year age gap and a continent separating us. My social battery is dead and my voice is lost, but new friendships were found.
            </p>
            <p>------------</p>
            <p>Less than 48 hours after arriving in Orlando, I was scheduled to depart. One problem: My flight was cancelled. I made my way to the JetBlue help desk. Across the hallway, a ginormous LCD screen streamed videos (in what appeared to be 480p) of a blown out beach break with glitchy seagull sounds. Because, when I long for the beach, it’s the sound of a squeaking seagull I miss the most.
            </p>
            <p>As one poor JetBlue employee worked his way through a queue of angry customers, a clever woman worked her way up the queue by guilt-tripping the rest of us. Eventually, Jerome, the JetBlue employee, found me a new flight. As he printed my boarding pass, he asked “aisle or window?”
            </p>
            <p>“Window”, I said. </p>
            <p>I boarded the plane, weaved my way through a plane full of Disney-eared Bostonians, and plopped myself in the last row of the plane. I was delighted to find that my “window” seat was lacking its only qualifier, an actual window. Thanks, Jerome. As I pondered more accurate names for this seat of mine (corner seat, wall seat, extra discomfort<span className='blog-registered'>&reg;</span>), I overheard a flight attendant say to another flight attendant: “Ya know, It’s so scary. I pray before every flight these days, you don’t?” The ship is certainly sinking.
            </p>
            <p>As I try to shove my backpack under the seat in front of me, my corporate goodie bag gets caught. This year, my company supplied each of us with one item: a company-branded umbrella.
            </p>
            <p>My question has been answered. The umbrella shall be used to shield the storm. At least I’ve learned to row. </p>
            <div className="blog-photos">
              <img src={process.env.PUBLIC_URL + '/blog/windowless-plane.jpeg'} alt={'windowless plane'} />
            </div>
          </div>
        </BlogsWrapper>
        <Subscribe />
      </Subpage>
    </SubpageWrapper>
  )
}

export default OrlandoBlog
