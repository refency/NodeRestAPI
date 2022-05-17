# Launching
To launch project need install system dependencies: sudo npm i  
Create .env file with needed parameters  
To run project production: npm run start  
To run project development: npm run dev  
# API
Action            | Request Type  |   Path          | Body          | Required columns
----------------- | ------------- | ----------------| ------------- | -----------------
Get tasks         |      GET      |      /tasks     |       -       | 
Create new task   |      POST     |      /tasks     | New Task      | text, status, number, list_id
Update task       |   PUT/PATCH   | /tasks/status/id| Updated Task  | status
Update number     |   PUT/PATCH   | /tasks/number/id| Updated Number| number
Get list by id    |      GET      |      /lists     |       -       |
Get all lists     |      POST     |      /lists     |       -       | name
