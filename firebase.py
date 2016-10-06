import pyrebase
import pandas

config = {
  "apiKey": "AIzaSyDxa638yh3YX4AHAQAKnkg5wdFND5FNDvQ",
  "authDomain": "boba-buddy.firebaseapp.com",
  "databaseURL": "https://boba-buddy.firebaseio.com",
  "storageBucket": "boba-buddy.appspot.com"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()
data = {
    "users": [
        {"name": "Kevin Xia", "ratings": [0,1,2,3,4,5,6]},
        {"name": "Max Lin", "ratings": [6,5,4,3,2,1,0]}
    ]
}
db.set(data)
#users = db.child("users").get()
#print(users.val())
#print(users.key())
