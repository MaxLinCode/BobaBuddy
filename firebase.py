import pyrebase
import pandas
import numpy as np
import math
from scipy.stats import pearsonr

config = {
  "apiKey": "AIzaSyDxa638yh3YX4AHAQAKnkg5wdFND5FNDvQ",
  "authDomain": "boba-buddy.firebaseapp.com",
  "databaseURL": "https://boba-buddy.firebaseio.com",
  "storageBucket": "boba-buddy.appspot.com",
  "serviceAccount": "Boba Buddy-d5fa3da8ade3.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
# data = {
#     "users": [
#         {"name": "Kevin Xia", "ratings": [0,1,2,3,4,5,6]},
#         {"name": "Max Lin", "ratings": [6,5,4,3,2,1,0]},
#         {"name": "Test", "ratings": [1,2,3,4,5,6,7]}
#     ]
# }
# db.set(data)
##### SET DATA ########
users = db.child("users").get().val()
m = len(users)
n = len(users[0]["ratings"])
mat = np.zeros((m,n)).astype('int')
for i in range(m):
    mat[i] = users[i]["ratings"]

rowSums = mat.sum(axis=1)
rowSquaredSums = np.square(mat).sum(axis=1)

# takes in the index of each row (user)
def pearson_correlation(x, y):
    #return (n * (mat[x] * mat[y]).sum() - mat[x].sum()*mat[y].sum()) / math.sqrt( ((n * np.square(mat[x]).sum()) - (mat[x].sum() ** 2)) * (n * np.square(mat[y]).sum() - (mat[y].sum() ** 2)) )
    sumX = 0
    sumY = 0
    sumProdXY = 0
    sumX2 = 0
    sumY2 = 0
    for i in range(n):
        # both users have to rate an item
        a = mat[x][i]
        b = mat[y][i]
        if a != -1 and b != -1:
            sumX += a
            sumY += b
            sumProdXY += a * b
            sumX2 += a ** 2
            sumY2 += b ** 2
    r_den = math.sqrt( (n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2))
    # both users have not rated anything
    if r_den == 0:
        return -10;
    r_num = n * sumProdXY - sumX * sumY;
    # print ('{} {} {} {} {}'.format(sumX, sumY, sumProdXY, sumX2, sumY2))
    return r_num / r_den

print (pearsonr(mat[0],mat[1]))
print (pearsonr(mat[1],mat[2]))
print (pearson_correlation(1,2))
