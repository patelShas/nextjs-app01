your last action item was trying to make the custom themes work on this.
you set them up on globals.css, but page.tsx dowsn't seem to recognize them

you got it done by writing them in tailwind.config.ts. next steps are to put this onto github, and to start nailing down exactly what items you want. CSS is nitty gritty you can do later

now your next trouble is getting positioning write. This feels like a rabbit whole, so if this problem continues, just through the styling and do something really basic. Getting the pages up is more important than making them look pretyy

You've started ripping and tearing trying to restart. you might check out astro to see if its easier to you.

02-25-2025 Fuck astro. NextJS is what you know. And it works. If it ain't broke don't fix it. Next Objective is to implement a bit of pages-inteded blogging

03-03-2025 This is taking embarassingly long. Here's a few tangible goals:
✅create a few markdown files following your post interface
✅create a method that can grab information from posts
create a method (in a dedicated file) that can collect the markdown files into a list
have your blog page grab it
