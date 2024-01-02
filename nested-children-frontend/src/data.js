const data = {
    "comments": [
        {
            "id": "1",
            "parent": "",
            "author": "Joe",
            "text": "As a solo dev who's taken up freelancing, Firebase and Supabase both work very well for the kinds of projects I do for clients. There's really nothing they can't do since they don't stop you from combining them with other solutions, and there's no reason to take on the extra headache of doing everything from scratch if you're working solo. Firebase is just GCP with an abstraction layer on top - there's nothing stopping you from spinning up a Node service using Cloud Run for long-running tasks that can't be deployed as cloud functions, for example. Same goes for Supabase, nothing stopping you from using AWS or other cloud services to supplement what you get for free with it.",
            "date": "2015-09-01T12:00:00Z",
            "likes": 101,
            "image": "https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            "id": "17",
            "parent": "1",
            "author": "Joe",
            "text": "Yep, another firebase fan here. I also use Next, so that takes care of my API needs.",
            "date": "2015-09-01T13:15:00Z",
            "likes": 28,
            "image": ""
        },
        {
            "id": "18",
            "parent": "17",
            "author": "Quinn",
            "text": "How do firebase APIs go in hand with Next js. Do you have any open source repo?",
            "date": "2015-09-01T13:20:00Z",
            "likes": 6,
            "image": ""
        },
        {
            "id": "19",
            "parent": "18",
            "author": "Joe",
            "text": "I don't have a repo to share, but it's pretty simple. I just use Next as a wrapper around the Firebase node package. I can make any number of endpoints and they just do whatever I want to Firebase. If I want to require the user to be signed in to hit an endpoint, I call auth.currentUser.getIdToken() on the client and send that token in the Authorization header of my request, then look for it in the backend.",
            "date": "2015-09-01T13:25:00Z",
            "likes": 12,
            "image": ""
        },
        {
            "id": "20",
            "parent": "1",
            "author": "Kyle",
            "text": "In all my years of freelancing, the only time I didn’t use firebase for a project was right now for my current project and the only reason I made that choice was because it wasn’t my choice, as the client provided a skeleton php/sql backend that aligns with what they’re already hosting in-house for other projects.",
            "date": "2015-09-01T13:30:00Z",
            "likes": 4,
            "image": ""
        },
        {
            "id": "21",
            "parent": "1",
            "author": "Nathan",
            "text": "Thank you for your helpful comment. then do you mostly do your job on firebase/supabase rather than having a custom backend?",
            "date": "2015-09-01T13:35:00Z",
            "likes": 7,
            "image": ""
        },
        {
            "id": "22",
            "parent": "21",
            "author": "Joe",
            "text": "Yep, makes my job much easier. It does help to be aware of cloud ecosystems in general in case you need something that Firebase or Supabase doesn't provide out of the box, but cases like that don't pop up too often, and I've always been able to slot them into my existing solution rather than needing to scrap everything and start over.",
            "date": "2015-09-01T13:40:00Z",
            "likes": 11,
            "image": ""
        },
        {
            "id": "23",
            "parent": "22",
            "author": "Nathan",
            "text": "Where does one learn this stuff? Like AWS has 100 services, so what's useful to learn to handle e2e development maybe?",
            "date": "2015-09-01T13:45:00Z",
            "likes": 3,
            "image": ""
        },
        {
            "id": "24",
            "parent": "23",
            "author": "Joe",
            "text": "For me, I picked up a lot of what I know about GCP from my first job, and it was on a need-to-know basis where I picked up just enough about each service to figure out how to complete the task I was doing at any given moment.",
            "date": "2015-09-01T13:50:00Z",
            "likes": 2,
            "image": ""
        },
        {
            "id": "25",
            "parent": "23",
            "author": "Riley",
            "text": "I will warn you that AWS can go from free tier to really expensive really fast! And I do mean really expensive!",
            "date": "2015-09-01T13:55:00Z",
            "likes": 11,
            "image": ""
        },
        {
            "id": "26",
            "parent": "22",
            "author": "Ellie",
            "text": "that was super helpful in convincing my self to use them over having to build my own from scratch. thank you so much!",
            "date": "2015-09-01T14:00:00Z",
            "likes": 7,
            "image": ""
        },
        {
            "id": "2",
            "parent": "",
            "author": "Jane",
            "text": "I'm pretty used to node+express and doing all the backend work by myself. Baas solutions are cool, unless you need mountains of custom logic. Then they will only slow you down. Coding your own backend and deploying it securely takes experience, but you'll never have that experience if you never try (;",
            "date": "2015-09-01T12:05:00Z",
            "likes": 56,
            "image": "https://miro.medium.com/v2/resize:fit:2000/1*HkM78Z1G5UKqQNCHwBHRfA.png"
        },
        {
            "id": "3",
            "parent": "",
            "author": "Smith",
            "text": "C#",
            "date": "2015-09-01T12:10:00Z",
            "likes": 66,
            "image": ""
        },
        {
            "id": "4",
            "parent": "",
            "author": "Marry",
            "text": "Node/express or Rust/Axum.",
            "date": "2015-09-01T12:15:00Z",
            "likes": 14,
            "image": ""
        },
        {
            "id": "5",
            "parent": "",
            "author": "Peter",
            "text": ". NET Core Web API / SQL Server. I was born by .NET and I'll die by it. Tools like NSwag and umijs-openapi plugin read the automatically generated Swagger UI from the API and generate typescript types and API fetch functions. Off the beaten path but works for me. All that being said supabase is pretty dope",
            "date": "2015-09-01T12:20:00Z",
            "likes": 38,
            "image": "https://learn.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger/_static/custom-info-nswag.png?view=aspnetcore-7.0"
        },
        {
            "id": "27",
            "parent": "5",
            "author": "Devin",
            "text": "Same thing here. Where do you host your backend?",
            "date": "2015-09-01T14:05:00Z",
            "likes": 4,
            "image": ""
        },
        {
            "id": "28",
            "parent": "27",
            "author": "Peter",
            "text": "I'm still pretty green in the front end space so things are hosted via Docker containers on unRaid OS behind nginx on my home connection. I imagine if one of my shitapps gets ready for primetime I will take a look at hosting on Azure.",
            "date": "2015-09-01T14:10:00Z",
            "likes": 3,
            "image": ""
        },
        {
            "id": "29",
            "parent": "27",
            "author": "Bill",
            "text": "Azure gives you hosting on the free tier for .net APIs. But I host mine on AWS",
            "date": "2015-09-01T14:15:00Z",
            "likes": 35,
            "image": ""
        },
        {
            "id": "30",
            "parent": "29",
            "author": "Peter",
            "text": "Does the free tier include SQL server?",
            "date": "2015-09-01T14:20:00Z",
            "likes": 6,
            "image": ""
        },
        {
            "id": "31",
            "parent": "30",
            "author": "Bill",
            "text": "They give you azure sql for free. Something about cosmo too.",
            "date": "2015-09-01T14:25:00Z",
            "likes": 32,
            "image": ""
        },
        {
            "id": "32",
            "parent": "5",
            "author": "Nathan",
            "text": "Have you ever been in a situation like .....am trying to form the data to post but api endpoint not getting hit ?",
            "date": "2015-09-01T14:30:00Z",
            "likes": 1,
            "image": ""
        },
        {
            "id": "33",
            "parent": "32",
            "author": "Peter",
            "text": "I have not. I'm not sure what you mean by form the data to post. I use the NSwag tooling to generate the typescript types and API fetch functions from the swagger UI. I'm not sure if that answers your question.",
            "date": "2015-09-01T14:35:00Z",
            "likes": 5,
            "image": ""
        },
        {
            "id": "6",
            "parent": "",
            "author": "John",
            "text": "If it’s going to be complicated, NestJs. If not, just Next/Remix with Supabase.",
            "date": "2015-09-01T12:25:00Z",
            "likes": 14,
            "image": ""
        },
        {
            "id": "7",
            "parent": "",
            "author": "Lily",
            "text": "Ruby on Railsss",
            "date": "2015-09-01T12:15:00Z",
            "likes": 14,
            "image": ""
        },
        {
            "id": "8",
            "parent": "",
            "author": "Tom",
            "text": "I'm a big fan of Hasura. It's a GraphQL engine that sits on top of Postgres. It's open source and you can run it yourself, but they also have a hosted version. It's really easy to get started with and you can do a lot with it. I've used it for a few projects and it's been great.",
            "date": "2015-09-01T12:30:00Z",
            "likes": 54,
            "image": "https://avatars.githubusercontent.com/u/13966722?s=200&v=4"
        },
        {
            "id": "9",
            "parent": "",
            "author": "Jack",
            "text": "Laravel is my go to. Extremely stable and robust release cycles, has been around for over 10 years now and it’s all refinement at this stage. It has almost everything baked in (auth, jobs, queues, commands, sessions, etc) and lots of first party modules (like payments).",
            "date": "2015-09-01T12:35:00Z",
            "likes": 25,
            "image": "https://laravel.com/img/logomark.min.svg"
        },
        {
            "id": "10",
            "parent": "",
            "author": "Rose",
            "text": "I love Ruby on Rails, and since discovering Inertia.js I can't imagine using anything else for the backend. ActiveRecord is so powerful, and Ruby is so expressive and fun to write in. I used to start projects with RoR and try to incorporate React with APIs or GraphQL, but would get tired of the context change. With Inertia, React is just the view layer in the monolith, it doesn't feel separate at all. I love working in this stack and will probably start all future projects heavier than a brochure page with it. If anybody uses React or Laravel, do yourself a favor and check out Inertia, it brings the whole stack together.",
            "date": "2015-09-01T12:40:00Z",
            "likes": 18,
            "image": "https://avatars.githubusercontent.com/u/5429470?s=200&v=4"
        },
        {
            "id": "34",
            "parent": "10",
            "author": "Nathan",
            "text": "ROR is mega productive and fun, need to look into inertia as I see it mentioned quite a bit",
            "date": "2015-09-01T14:40:00Z",
            "likes": 2,
            "image": ""
        },
        {
            "id": "35",
            "parent": "10",
            "author": "Itzel",
            "text": "Any good resources to learn this? I’ve been using nodejs for 5 yrs and want to learn a framework out of the JS ecosystem.",
            "date": "2015-09-01T14:45:00Z",
            "likes": 7,
            "image": ""
        },
        {
            "id": "36",
            "parent": "35",
            "author": "Tom",
            "text": "it really feels like a good time to check back in on Rails. I watched quite a bit of the last Rails conference this past month and they are definitely trying to make moves.",
            "date": "2015-09-01T14:50:00Z",
            "likes": 1,
            "image": ""
        },
        {
            "id": "37",
            "parent": "10",
            "author": "Wesley",
            "text": "I’m using Ruby on Rails with Hasura as the API and that’s been amazing.",
            "date": "2015-09-01T14:55:00Z",
            "likes": 3,
            "image": ""
        },
        {
            "id": "38",
            "parent": "10",
            "author": "Dina",
            "text": "Ruby on Rails with GraphQL Ruby for the back end, React with Typescript and React Relay on the front end, and I'm a happy developer.",
            "date": "2015-09-01T15:00:00Z",
            "likes": 4,
            "image": ""
        },
        {
            "id": "11",
            "parent": "",
            "author": "David",
            "text": "Golang. I use that for work on the daily so it’s what’s easiest for me.",
            "date": "2015-09-01T12:45:00Z",
            "likes": 10,
            "image": "https://www.freecodecamp.org/news/content/images/2021/10/golang.png"
        },
        {
            "id": "12",
            "parent": "",
            "author": "Linda",
            "text": "Since you are going solo, saving time on setup/infra/devops make sense (and focus time on dev). For custom logic, Supabase actually let you write edge custom functions using Deno. It should cover a vast amount of requirements for having a custom backend.",
            "date": "2015-09-01T12:50:00Z",
            "likes": 9,
            "image": ""
        },
        {
            "id": "13",
            "parent": "",
            "author": "Mike",
            "text": "I used to use nextjs with supabase, but recently switched to nextjs with planetscale and clerky. both hosted on vercel. nothing against supabase btw, both stacks are great, just trying the https://create.t3.gg/ stack to learn some new things.",
            "date": "2015-09-01T12:55:00Z",
            "likes": 31,
            "image": ""
        },
        {
            "id": "14",
            "parent": "",
            "author": "Emily",
            "text": "Depends. I like to use a Python framework for ML-based projects (Django or FastAPI). For the easiest stack, I generally use Next/Supabase",
            "date": "2015-09-01T13:00:00Z",
            "likes": 8,
            "image": ""
        },
        {
            "id": "15",
            "parent": "",
            "author": "Bob",
            "text": "I've been using NestJs for the backend of a sass I've been building. I don't think I'll use it again on my next project. I've been itching to learn something else outside the JS ecosystem like Rails or Phoenix. Supabase looks cool too though for a solo dev.",
            "date": "2015-09-01T13:05:00Z",
            "likes": 7,
            "image": ""
        },
        {
            "id": "16",
            "parent": "",
            "author": "Sara",
            "text": "Sometimes .Net, sometimes Express, sometimes Next. Next can be good esp for smaller teams or solo devs since you can do backend/frontend all on server side, but it is fairly opinionated and has its own quirks.",
            "date": "2015-09-01T13:10:00Z",
            "likes": 6,
            "image": "https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format"
        }
    ]
}

export default data