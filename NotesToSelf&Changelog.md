- your last action item was trying to make the custom themes work on this.
  you set them up on globals.css, but page.tsx dowsn't seem to recognize them

- you got it done by writing them in tailwind.config.ts. next steps are to put this onto github, and to start nailing down exactly what items you want. CSS is nitty gritty you can do later

- now your next trouble is getting positioning write. This feels like a rabbit whole, so if this problem continues, just through the styling and do something really basic. Getting the pages up is more important than making them look pretyy

- You've started ripping and tearing trying to restart. you might check out astro to see if its easier to you.

**02-25-2025** Screw astro. NextJS is what you know. And it works. If it ain't broke don't fix it. Next Objective is to implement a bit of pages-inteded blogging

**03-03-2025** This is taking embarassingly long. Here's a few tangible goals:

- [x] create a few markdown files following your post interface
- [x] create a method that can grab slugs from posts
- [x] create a method that can grab titles and excerpts from posts
- [x] create a method (in a dedicated file) that can collect the markdown files into a list
- [x] have your blog page grab it

**05-05-2025** Met previous goals. Tried out copilot and it was pretty useful. Next goal will be to set it up so that each markdown file can have its own page

**03-07-2025** Set up dynamic routing so that any blog post should point to a blog/slug thing. Currently though this doesn't lead to anything though.
next steps
the page should check if a matching post exists, otherwise
create a default blog page (we don't see anything at that address., etc.)
if matching post exists.
grab title , info, details etc.
If you can get this working the next step is actually filling in the details to this site... how do you decide what a side should look like?

**03-09-2025** Added in some functionality so that there will be a landing page for slugs that don't correspond to an actual post. next step is to make it grab content from the mrkdown posts.
Done. Next step is too probably create real posts now instead of the dummy material. Then, come up with actual design for how this website ought to look.

**03-12-2025** Aesthetics moment. I need to make this look decent. I'll think I'll have it set such that all content is aligned to the center 1/2 on LG+ screens. i'll need to set a minimum size so that when you look at it on a phone it doesn't just shrink to the width of a finger. maybe i can have it so that on <=MD it is set to take up the whole screen.
so the cosmetics are going smoothly but something unexpected happened - your blog pages are grabbing content from the markdown files but aren't actually converting them to html. you'll need to figure that out - maybe start with this video: https://www.youtube.com/watch?v=YC6LqIYVHxI

**03-16-2025** Good work. You made it show up nicely. You'll probably forget later so remember that if you wanna set CSS rules for a whole tag (h1, h3, link, etc.) go to src/app/globals.css. Next task is to continue on cosmetics

**03-17-2025** Devoting a little time to this project in the morning. Maybe if I worked on it more frequently I would find it easier to get into the grove of things
