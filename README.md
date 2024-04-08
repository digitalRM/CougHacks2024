# Accessible Articles - WSU CougHacks 2024 - 1st Place Winner 🏆

## By Ruslan Mukhamedvaleev, Rachel Chu, Wanhao Zhang, and Murugan Sakthivel 

![CougHacks](https://github.com/digitalRM/CougHacks2024-private/assets/70782025/6124454c-317a-466f-a35e-164b7146e6a3)

## The Prompt

*"Efficiency and Productivity". Projects should be related to this theme — something that would make any kind of task faster and better, or in some way promote or relate to efficiency and productivity.*

### The Issue
- Even in our age of web development, developers/designers choose not to or don't think to include accessible features in their apps. This makes performing simple tasks like as reading becomes incredibly difficult for people with disabilities like Dyslexia or eye conditions like an Astigmatism (I actually have this in both my eyes, and it makes it hard to read super contrasting colors like white #FFFFFF text on a black #000000 background, or vice versa).

### Our Solution
- We can't tackle the entire issue, but we can take on a smaller subsection like web-based articles. With this, our idea for "Accessible Articles" was born. We wanted to create a tool that allows users to customize articles they find on the internet in multiple ways to make them more accessible, ranging from changing colors to editing fonts and sizing. We also considered expanding to include extra features like text-to-speech, a built-in dictionary, annotation tools, accounts for saving, and some AI-powered features like multiple-choice questions after each article to test your knowledge, a generated summary for a TLDR, and the ability to talk with the article & to ask it questions about the topic. 

# The Story
Our team consisted of four Kamiak High School students, Ruslan Mukhamedvaleev (Sophomore), Rachel Chu (Senior), Wanhao Zhang (Senior), Murugan Sakthivel (Senior), with assistance from Lindsey Ehrlich (Senior), another Kamiak High School student. This tool was developed with a lot of caffeine and very little sleep overnight for the CougHacks hackathon.


## Brainstorming Stage

We initially had many different ideas for a productivity tool. Initially, we considered building a tool for searching different entertainment forms like movies, video games, and books. While we were interested in pursuing this, we didn't feel it fit well with the theme. 

Our second idea was to develop a shopping platform that promoted small businesses and eliminated spam listings, similar to the issues faced by Amazon and other shopping tools like Google Shopping. With some further consideration, we realized that this idea would not at all be scalable without major issues. 

For our third idea, we briefly considered a to-do list app (haha), but thought that our implementation would be too simple and not any more helpful than the built-in reminders app on most phones.

The fourth and final idea was the one we settled on: "Accessible Articles." We thought about issues that we shared in common and realized that half of us had trouble reading things online due to certain preconditions that made it more difficult to read text. Thus, the idea to create a tool to help others like us was born!


![IMG_6621](https://github.com/digitalRM/CougHacks2024-private/assets/70782025/c54ac80c-e7af-4904-96b9-000ab4757169)


## Building 

![CougHacks](https://github.com/digitalRM/CougHacks2024-private/assets/70782025/01a8ac79-57e0-44ff-9be6-0d01a55de935)

## Final Product

![gif](https://github.com/digitalRM/CougHacks2024/assets/70782025/189093b6-85ba-4930-afb3-a3a3ed381035)

# Running Locally
To get a local copy up and running, follow these steps:

### Prerequisites for Front End

- npm
- Node.js

### Installation for Frontend

Clone the repository

```bash
git clone https://github.com/digitalRM/CougHacks2024.git
```

Install required packages

```bash
npm install
```

Create a .env.local file with your OpenAI API key

```bash
KEY = ""
```

Run the frontend server

```bash
npm run dev
```

### Prerequisites for Backend

- Python
- pip

### Installation for Backend

Open `/backend` folder

Install required packages

```bash
pip3 install -r requirements.txt
```

Run the backend server

```bash
python3 backend/api.py 
```


## Built With

- NextJS - *` React.JS framework `*
- Shadcn/UI - *` UI library `*
- Tailwind CSS & UI - *` CSS framework and UI library `*
- Lucide React - *` Icon Libray `*
- OpenAI API - *` OpenAI API access through Python `*
- Newspaper - *` Webscrapping Library `*









# CougHacks2024
