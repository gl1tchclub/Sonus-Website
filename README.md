# Sonus

### Table of Contents

[Purpose](https://github.com/mintep1-student/mintep1-web#purpose)

[Project Description](https://github.com/mintep1-student/mintep1-web#project-description)
* [What Does The Website Do?](https://github.com/mintep1-student/mintep1-web#what-does-the-website-do)
 
* [Technology Usage](https://github.com/mintep1-student/mintep1-web#)

* [Known Bugs](https://github.com/mintep1-student/mintep1-web#known-bugs)

* [Challenges](https://github.com/mintep1-student/mintep1-web#challenges)

* [Future Features](https://github.com/mintep1-student/mintep1-web#future-features)

[Installing Sonus](https://github.com/mintep1-student/mintep1-web#installing-Sonus)

[Credits](https://github.com/mintep1-student/intro-web-minty#credits)

___

## Purpose

Sonus is a music web service that offers access to millions of songs. Sonus is a more personal platform where each user, as they listen and develop their music taste, can see their own unique, individually crafted Sona, a musical persona.

The idea is that each Sona is developed using an AI program that takes in user data such as favourite songs, genres, artists, those they don't like, their playlists, vibe, mood, how often they listen to music, and more to generate their Sona!


<div align="center">

**A million songs, _one Sona_**

</div>
___

## Project Description


### What does the Website Do?

Sonus is a web-based music service that provides its users access to millions of songs, artists, and playlists. Additionally, using AI, a Sona is uniquely crafted for each user depending on their listening habits.

A Sona can look soft and glowy like an aura, or clear and spikey. 

Each Sona will have a description explaining the look of it. 

Is it chaotic, yet soft? 

Is it rough and textured, but also elegant? 

Each user's Sona develops over time the more they listen to music. A Sona may look bright and watery today, but could change completely the next.

Sonas are like clouds in the sky - they're shaped based on their environment and look unique to everyone!

Users can connect with others through their Sonas! Often times, people are very conservative with their music tastes, worrying that others may dislike it. This can lead to being embarrassed and feeling shame about their unique tastes.

Comparing your Sonas with friends and family, seeing the similarities and differences, and having more open dialogues about how different tastes in music can look visually will hopefully lead to more positivity around the different types of music others listen to.

### Technology Usage
To make this project come true, I used VSCode as the IDE and Sveltekit as the framework. Using this framework, I coded the entire project in HTML, CSS, and Javascript.

All user data and images are fetched from the [Unsplash API](https://api.unsplash.com/) and the sona description is fetched from the [WordNinjas API.](https://api.api-ninjas.com/)

I found a lot of inspiration for css animations and components by looking at websites that listed some cool ones. I found it hard to find out how to code for them, so I often resorted to refering to [W3Schools](https://www.w3schools.com/), the [Svelte Tutorial](https://kit.svelte.dev/docs/introduction), and of course the [MDN Web Docs](https://developer.mozilla.org/en-US/) for this.

Lastly, I used [Coolors](https://coolors.co/) to generate a color palette that would give me an idea for my website and become the theme.

### Known Bugs
The website is not responsive for every single dimension possible, but is responsive for 90% of devices.

The fetching of the sona description takes a while to load as once it fetches, there is Javascript that also randomizes which words to use. Fetching the home page background also takes 4 seconds to show.
These issues are resolved through the use of a loading screen.

### Challenges

I initially started this project in week 2 on a different repository. I used it as an opportunity to apply the concepts I was learning in context of the project. However, although it did help with my learning, I found that come week 12 after I studied hard for the SBA, I realized that the state of my project at the time was a mess. There were so many components and pages, scope creep had been an issue despite not having a clear idea of my website's purpose, almost everything was half-finished, and a lot of the code was based on early html/css knowledge. 

Overwhelmed, I made a new repository, took the modal component and the buttons I'd made from the old repo, and started from there. That was also when I came across my biggest inspiration that allowed me to push through with this project to the end - a cute, pinky purple color palette.

With this, I had a huge eureka moment and instantly came up with Sonus on the spot.

Naturally, I couldn't just go to work and code right then. I was always confronted with concepts that I didn't entirely understand, but I consistently dedicated myself to learn and work to implement what I'd learned. I used a lot of open source resources and communicated with others to learn these concepts.

I also tried to find music APIs that I could use. I started with the Spotify API, however, getting an access token to that was a whole beast of its own that we hadn't covered in class. This was the same with other music APIs that I came across. This was because you had to create code that would ask the user for permission to use their data, even if you just wanted to get pictures of album covers and artist names. Only if you got permission would you then receive an access key which would only last a couple hours at _most_ before expiring.

My biggest challenge was that I had restarted a 70% project I'd been working on since week 2 and I only had 2 weeks to finish it. This caused a lot of anxiety and stress since I also had other big projects I needed to complete. I worked everyday for 2 weeks from early morning to 10-11pm at school in order to not just barely pass, but to maximize the grade I can get for it. I dedicated myself to showing my best work. 

Of course, this was at the expense of my mental and physical health. I would work so hard for 12hrs a day that I would forget to eat, take breaks, exercise, and I couldn't sleep due to my peaking anxiety. Of course I cried, but I've managed to produce something that I can be proud to hand in. 


### Future Features
In the future, I wish to develop the discover, library, and exit pages. I also want to create my own API for this website.

I hope to add a search function with html/css attached so that users can look up music.

I also want to add a dark theme mode, more content to the home page, and actual descriptions instead of lorem ipsum.
___

## Installing Sonus
To run Sonus locally, you first need to have:
* Git Bash
* Node
* An IDE that can run HTML, CSS, and Javascript. ([VSCode](https://code.visualstudio.com/download) is recommended

Once you have the necessary software installed, clone down and open the folder in your IDE. Also download the svelte extension for better code readability.

If using VSCode, open a new terminal and type the following script:
```bash
npm run start
```
OR the following commands:
```bash
npm i
npm run dev -- --open
```

___

## Credits
**Developer:** Elizabeth Minty
___
