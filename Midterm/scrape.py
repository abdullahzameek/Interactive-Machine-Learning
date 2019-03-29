from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import time

count = 0
url = 'https://m.facebook.com/profile.php?id=250320155116643&ref=content_filter/'
file2 = open("cncDataNew.txt","w+") 

driver = webdriver.Chrome(executable_path="/home/abdullahz/Desktop/InteractiveML/Midterm/chromedriver")
driver.get(url)

SCROLL_PAUSE_TIME = 4.5

# Get scroll height
last_height = driver.execute_script("return document.body.scrollHeight")

while(count < 10):
    count+=1
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    
    # Wait to load page
    time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == last_height:
        break
    last_height = new_height

soup = BeautifulSoup(driver.page_source, "html.parser")
result = soup.find_all("p")
for r in result:
    print(type(r))
    print(r.getText())
    file2.write(str(r.getText()))
    file2.write("\n")
file2.close()