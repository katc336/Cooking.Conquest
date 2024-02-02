# Cooking.Conquest

## Description 
Learning to cook can be a daunting task, and to new cooks, vegetarian cuisine poses a unique challenge.  The goal of Cooking Conquest is to create an interactive way to introduce vegetarian recipes to aspiring cooks through a fun high fantasy RPG game environment.

While using the app, users select level appropriate recipes, and as they complete them, gain experience points to level up in game. As they progress through the levels, users will unlock new recipes and cooking skills that increase in difficulty. 

After level three, users have the ability to join a guild and post their own vegetarian creations. The guild feature provides an opportunity to interact, share, and compete with each other in the app community by reviewing and rating eachother's recipes. The app will also feature a leaderboard that showcases the top guild’s ranking and top ranking individual cooks based on review scores, providing a sense of friendly competition and camaraderie within the app community. 

## Technology Used
PostgreSQL,
Prisma,
Redux Toolkit, 
React.js,
Express.js,
Node.js, 
React Router DOM, 
Vite,
MUI Library,
Framer Motion

## Artwork
All artwork featured in this application was created by this repository creator, katc336, using Adobe Fresco. The digital illustrations and designs were crafted with care to enhance the visual experience of Cooking Conquest. 

## How to Setup the Project
To run this code on your computer, follow these steps:  
1. Copy the 'clone' link from the **<> Code** button
2. Run `git clone <copied link>` in the command line to copy the repo down to your local computer
3. Run `cd Cooking.Conquest` to switch to the repo's folder
4. Run `npm install` in the command line to install any dependencies you don't have installed globally
used
5. Create a .env file in the top-level of your folder
6. In the .env file, insert this code:  
    `PORT=<port number>`  
    `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/<database name>"`  
    `JWT_SECRET="<some secret>"`  
7. Run  the following commands in the command line to add prisma and initialize the database:  
    `npm install prisma --save-dev`  
    `npx prisma migrate dev --name init`  
8. Run `npm run seed` in the command line to seed the database
9. Run `npm run dev` in the command line to start the server
10. Open the app on your localhost at the port you specified!

## Known Issues 
- Error handling for post requests that are unsuccessful
- Unable to patch posted recipes
- No mobile feature  
- Needs improved user accessibility across entire application