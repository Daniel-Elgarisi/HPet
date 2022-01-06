# HPet

![alt text](https://media.giphy.com/media/cdeB7GSfa6KWKPKfIS/giphy.gif)

Hpet Application - cloud architecture:
our app is made of three parts, this overview will explain how
every part is deployed on the aws cloud to enable online usage of the app.

Database:
We use Postgresql as our app's database.
it is hosted on an ec2 instance with linux operating system.
To enable http communication the instance has Public ip.

Backend rest api:
We used Node.js to run express server as our backend.
it is hosted on the same ec2 instance as our database,
with port 5000 open to enable the front to communicate with the rest api.

Frontend:
We used vanilla javascript to write static pages as our app's frontend.
It is hosted on a publicly accessible S3 bucket.

### the address for our frontend is:
### http://yosodot.s3-website.eu-central-1.amazonaws.com/
