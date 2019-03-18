1. Install [Node.js](<https://nodejs.org/en/>)

2. To start local server clone the repository from <https://github.com/abalena/UTubePlayer> and install dependencies.
Open console and run next commands:
```
git clone https://github.com/abalena/CinemaApp.git
cd UTubePlayer
cd client
npm install
npm start
```
 Project will be opened in your browser.

3. Install and run [MongoDB](<https://www.mongodb.com/download-center/community>)

4. In the project go to the folder *server* and run next commands:
```
npm install
npm start
```
Server is located at http://localhost:3000 .

Full list of videos that have been watched returns at URL */player/:userId* .
There is a user with only one ID now. The ID configures in *client/etc/user* .
To get history list go to http://localhost:3000/player/qwe123 .
