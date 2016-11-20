import numpy as np

m = 4
n = 7
data = [0, 1, 2, 3, 4, 5, 6,
-1, -1, -1, -1, -1, -1, -1,
 -1, -1, -1, -1, -1, -1, -1,
 0, 1, 2, 3, 4, 5, 6]
data = np.array(data)
data = np.reshape(data,(m,n))

U,S,V = np.linalg.svd(data, m, n)
