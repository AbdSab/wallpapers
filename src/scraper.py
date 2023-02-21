import requests
from bs4 import BeautifulSoup

url = "https://wallpapercave.com/ronaldo-4k-mobile-wallpapers"

res = requests.get(url)
content = BeautifulSoup(res.text, 'html.parser')

links = []
imgs = content.find_all(class_= "wimg")
print(content)
for img in imgs:
    print(img)
    #links.append(img.src)
