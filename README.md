# Ecosnap
EcoSnap is a React app hoping to change the future of the planet.

## Inspiration

Two things continue to increase daily: global temperatures and artificial intelligence capabilities. To use the latter as a solution to the former, I set out to create an AI-powered application that would help solve environmental issues.

In the past, I have carried out Recycling Drives for school supplies, batteries, lightbulbs, clothing, and more. During these drives, I realized that many do not realize these programs exist. In fact, in a survey conducted during one of these drives, only 23% of participants could pass (a score of 70 or above) a quiz with questions about whether or not different items could be recycled. Currently, the solution is an internet search. However, this task can be time-consuming and yield inaccurate and confusing results. A computer vision algorithm that could scan trash and sort it into Recyclable, Compostable, Non-recyclable, and Recyclable through Special Drop Off programs will likely reduce the number of people who throw away their items because they are unsure if they can be recycled. 

## What it does

EcoSnap is a 4-part solution:

1. Community Involvement
    - The online discussion forum in EcoSnap allows community members to connect, ask questions, and learn about volunteering opportunities. Community involvement is often how people gain exposure to environmental causes and learn about its importance. By promoting this sense of community, people are more likely to engage in ecological events actively and have the curiosity to learn more about the environment.
2. Reduce Waste
    - The Trash Sorter uses the Microsoft Azure Computer Vision model to detect objects and sort them as recyclable, non-recyclable, compostable, or recyclable through special drop-off programs. I hope that with this feature, more people will dispose of their trash through sustainable means, as they will learn about all the items they can dispose of through special programs and mainstream recycling.
3. Gain Knowledge
    - The EcoBot is a GPT-3 OpenAI API-powered chatbot that specifically answers environmental questions to give users a concise, easy-to-interpret answer to their ecological questions. Often, a basic internet search can yield unwieldy results, and EcoBot brings the power of emerging technologies to solve this problem and encourage more people to conduct environmental research.
4. Spread Awareness
    - The EcoImages tool is a DALL-E OpenAI API-powered image generator that can assist anyone conducting an environmental awareness campaign or event. For example, for a seminar on climate change, the organizer may want to have a powerful image to persuade more people to attend. This organizer can generate a unique image with the EcoImages tool and post it on their social media channels and posters to boost awareness. In addition, this tool can be used to generate beautiful nature scenes that encourage people to fight for the environment.

## How we built it

I built this tool using React, Microsoft Azure, Firebase (for authentication, storage, and Firestore Database), and OpenAI APIs, using VSCode as my editor and using GitHub to upload my project for the public. I started designing, then built the basic skeleton for my web app. After this, I implemented each of the features one by one and dedicated time to styling the pages to have consistent formatting.

## Challenges we ran into

I ran into several errors along the way, as this was my first time working with React, OpenAI, and Microsoft Azure. 

I encountered challenges implementing the Azure Tensorflow Computer Vision model into the React application. Initially, the program threw errors as it could not parse the JSON code in the model.json file. However, after moving files around and changing the paths in the code, I eventually got the model to work.
 I also encountered some issues with styling and having a consistent Navbar across all pages. I solved this by having a "layout" folder and having an index.js file in this folder that stored the layout of the components.



## Accomplishments that we're proud of

I am very proud that I created a website implementing technologies that could be used to save the planet. I have always had a passion for advocating for the environment, and I was very proud that I could create an advanced technological solution to a significant environmental problem in a short time.

Above all, I am proud of how much I learned. I have indeed grown as a programmer over the last 48 hours.

## What we learned

I had no experience with React, Microsoft Azure, Open AI, or API calls, and I picked up everything on the way as I was working on this project. I learned about training a model in Azure, implementing a model in React, styling React pages, calling an OpenAI API and displaying the results, and more.

## What's next for EcoSnap - Sustainability Toolkit for All, powered by AI

The next steps for EcoSnap include…

1. Improving the computer vision model even further to increase precision and recall.
2. Adding a "volunteer log" to log environmental volunteering hours and display those hours in a volunteer dashboard, displaying the different specific causes that the user is dedicated to and the number of hours they have devoted to each (for example, water conservation, renewable energy, reduction of Waste, cleanups, etc.) Another idea, along with this, is making the application competitive, where users can start month-long challenges for who has the most volunteering hours and can invite their friends.
3. Built-in environmental webinar platform - having a video chat feature that allows users to host a virtual environmental event from the website.
