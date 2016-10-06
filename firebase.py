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
data = {"name": "Kevin Xia"}
db.child("users").set(data)
#users = db.child("users").get()
#print(users.val())
#print(users.key())
