import json
from pprint import pprint

with open('employees.json') as data_file:
    data = json.load(data_file);

data["employees"].append({"this": "foo", "that": "bar"})
data["employees"].append({"asdf": "bar", "fdsa": "foo"})
pprint(data["employees"][4]["asdf"])
