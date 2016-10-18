import pyrebase

config = {
  "apiKey": "AIzaSyDxa638yh3YX4AHAQAKnkg5wdFND5FNDvQ",
  "authDomain": "boba-buddy.firebaseapp.com",
  "databaseURL": "https://boba-buddy.firebaseio.com",
  "storageBucket": "boba-buddy.appspot.com",
  "serviceAccount": "Boba Buddy-d5fa3da8ade3.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

data = {
    "drinks" : ["Milk Tea", "Passionfruit Green Tea", "Rose Milk Tea"]
}

db.update(data)
