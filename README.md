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

3. Install and run [MongoDB](<https://www.mongodb.com/download-center/community>) with default setting which you can change in *server/etc/config*


4. In the project go to the folder *server* and run next commands:
```
npm install
npm start
```
Server is located at http://localhost:3000 .

Find video, click on its image to open YouTube player and enjoy watching.
Your video will be added to the history list from where you can watch your video again (just click on the title of video) or delete from history list.

Full list of videos that have been watched returns at URL */player/:userId* .
There is a user with only one ID now. The ID configurations in *client/etc/user* .
