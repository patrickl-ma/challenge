import json

def createFixture(comment):
    return {
    "model": "comments.comment",
    "pk": comment['id'],
    "fields": comment
}

file = open('comments.json')

data = json.load(file)
comments = data['comments']
fixture = list(map(createFixture, comments))

with open('./backend/comments/fixtures/fixture.json', 'w') as fixtureFile:
    json.dump(fixture, fixtureFile)