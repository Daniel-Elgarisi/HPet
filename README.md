# HPet
This application is based on 3 technologies:
backend based on node.js:
   - to run this part node.js and npm are needed: https://nodejs.org/en/download
   - to install dependencies:
      - open cmd
      - cd to back folder of the project: cd {project_path}/back
      - run npm install

database is postgres sql:
   - to use it postgresql is needed, we recommend on using pgadmin: https://www.pgadmin.org/download
   - a backup of the database is saved in the back folder of the project
      - restore the database1.tar file using pgadmin: https://www.pgadmin.org/docs/pgadmin4/development/restore_dialog.html
   - update database connection object in {project_folder}/back/db/db.js,
     with the correct patrameter(your password and db name if changed, host will remain localhost)

frontend based on vanilla javascript:
   - to run this part a web browser is needed, we recommend on using chrome: https://www.google.com/chrome
   - start file login.js in path: {project_folder}/front/login.js to start the app.

