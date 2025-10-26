import React from 'react'
import SubpageWrapper from '../../subpage-wrapper'
import Subpage from '../../subpage'
import BlogsWrapper from './blogs-wrapper'
import { Subscribe } from '../subscribe'

export const HowToTradeABike = () => {

  return (
    <SubpageWrapper>
      <Subpage>
        <BlogsWrapper>
          <div>
            <h3>
              How to Trade a Bike
            </h3>
            <h5>
              August 30, 2025
            </h5>

            <div className="blog-photos">
              <img src={process.env.PUBLIC_URL + '/blog/IMG_6200.jpeg'} alt={'new bike!'} />
              <img src={process.env.PUBLIC_URL + '/blog/IMG_5724.jpeg'} alt={'new bike!'} />
              <img src={process.env.PUBLIC_URL + '/blog/IMG_5689.jpeg'} alt={'new bike!'} />
            </div>

            <p>------------------------------</p>
            <p>Nurture the urge to scroll away; Facebook</p>
            <p>A sale of the estate unknown; a bike</p>
            <p>A green ogre Surly the one for me</p>
            <p>This deal too good to pass I tell myself</p>
            <p>With me it went the wheel spoke for itself</p>
            <p>Unscrew, wipe down, with grease came please for me</p>
            <p>After some time beneath the grime the fate</p>
            <p>Stamped in the frame; Double X-L; oh gee</p>
            <p>A short king I am not, nor tall enough</p>
            <p>Without moment to think I find a post </p>
            <p>“Does anyone have surly ogre XXL?”</p>
            <p>I sent him a message; presumed no luck </p>
            <p>Emerge a barter for bike unfit; whoopee!</p>
            <p>How does one verify this man no steal my bike?</p>
            <p>Local bike shop the answer I needed</p>
            <p>Through mail received a happy surprise; online friend</p>

            <p>------------------------------</p>

            <p>When I moved to Seattle, I sold all my bikes except two. I kept my custom-built 1990s Marin and a mountain bike that I traded for a loaf of sourdough bread and a jug of olive oil (that’s a story for another day). I had full intentions of “chilling out” with my bike building obsession for a while, and just being content with what I had. Then one morning, while scrolling on the toilet, I came across a Facebook marketplace post for an estate sale up in Bellingham, WA. In one of the last photos of the post, I noticed a dark green Surly bike packing bike, built out in the most ridiculous way. The estate sale was right near some world class mountain bike trails, so I thought I might as well swing on by. </p>
            <p>When I arrived, I was relieved to see the bike still there. I took it for a short test ride, and bought the bike. I had assumed from the photos and seeing the bike in person that it was a Surly Ogre XL. When I got home, I cleaned the bike and disassembled it to clean some rust. On the bottom of the bike I saw some markings that led me to believe the bike was actually a XXL. I didn’t even know they made those! I finished cleaning the bike without putting a whole lot of thought into it. The bike felt like it was a good size, so who cares!</p>
            <p>That evening, I was looking for some external validation on sizing on the internet, when I came across a Facebook post that was nearly a year old. It read something along the lines of “Does anyone have a surly ogre XXL? Surly stopped making them, and I’m too tall for an XL.” As it turns out, Surly only made XXLs for a few years, and mine was one of them. For a few hours, I contemplated responding to the post. In a spontaneous moment right before I fell asleep, I decided to respond. </p>
            <p>To my disbelief, I woke up to a response from the original poster! 24 hours ago, I didn’t even own this bike, and now I’m talking to some random dude on the internet about SHIPPING this bicycle across state lines. What the… After some back and forth, my new internet bike friend was sending me pictures of his bikes, suggesting we trade bikes. Absurdity!</p>
            <p>A few days later, we decided to do it. We were going to trade bikes. His bike was newer, with nicer components, an extra set of tires, and all the bells and whistles. My bike was niche. Monetarily speaking, I come out on top. In an effort to “sweeten” the deal for him, we decided I would throw in some components I had lying around. Some nicer handlebars, and my perfectly broken in brooks leather seat. </p>
            <div className="blog-photos">
              <img src={process.env.PUBLIC_URL + '/blog/IMG_6549.jpeg'} alt={'messenger chat'} />
            </div>
            <p>As we finalized the plans, it became more difficult to ignore the banner that reads "Do you know this person?"</p>
            <p>Shipping nice stuff to people on the internet is kinda sketchy, so we came up with a verification plan. After our bikes were disassembled, we FaceTimed while we packed the items into boxes. We then took our packed bike boxes to our local bike shops, where they would be picked up by the shipping company. This way, we could call each others’ bike shops to ensure at least something was getting shipped to each of us. </p>
            <p>After a few long days of waiting around, a massive package arrived at my doorstep. My new bike! I frantically unpacked the bike to ensure everything was there, and put all the pieces back together. I don’t have words to describe how I felt when I took the bike for a few laps around the block. I couldn’t believe this all worked out. </p>
            <div className="blog-photos">
              <img src={process.env.PUBLIC_URL + '/blog/IMG_6550.jpeg'} alt={'success'} />
              <img src={process.env.PUBLIC_URL + '/blog/IMG_5685.jpeg'} alt={'success2'} />
            </div>
            <p>You build a unique relationship with someone when you meet online, then blindly trust eachother to mail thousands of dollars of bicycle to eachother. The whole experience was a whirlwind of emotions, and left me feeling super fulfilled. It was a subtle reminder that you might have more in common than you'd think with the random person you meet online.</p>
          </div>
        </BlogsWrapper>
        <Subscribe />
      </Subpage>
    </SubpageWrapper>
  )
}


export default HowToTradeABike
