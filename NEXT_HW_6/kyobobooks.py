import csv
from datetime import datetime
import time
import codecs
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


#chrome webdriver 경로 
chromedriver_path = "/Users/sungmin/Desktop/chromedriver-mac-x64/chromedriver"
#chrome 캐시 남길 폴더 지정
user_data_dir = "/Users/sungmin/Desktop/NEXT/Session/NEXT_Session_6/save"

chrome_options = Options()
chrome_options.add_argument(f"user-data-dir={user_data_dir}")
service = Service(executable_path = chromedriver_path)

#chromeDriver에 사용자 데이터 디렉토리와 함께 옵션 전달
driver = webdriver.Chrome(service =service, options =chrome_options)

#멜론 웹페이지 접속하기
driver.get('https://www.kyobobook.co.kr/')


#실습1. 버튼 클릭

btn = driver.find_element(By.XPATH, '//*[@id="welcome_header_wrap"]/div[3]/nav/ul[1]/li[3]/a')
btn.click()
time.sleep(1)  #클릭하고 기다려야지.

#버튼 가려서 안 클릭되니까 스크롤 내린 후 진행
driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.ARROW_DOWN)  #page down보다는 조금만 내림
time.sleep(1)
driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.ARROW_DOWN)  #page down보다는 조금만 내림
time.sleep(1)
driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.ARROW_DOWN)  #page down보다는 조금만 내림
time.sleep(1)



#50개 리스트로 변경
btn2 = driver.find_element(By.XPATH, '//*[@id="selListPer-button"]/span[2]')
btn2.click()
time.sleep(1)  


btn3 = driver.find_element(By.XPATH, '//*[@id="ui-id-28"]')
btn3.click()
time.sleep(1)  


titles = []
#실습2. 1~50위 베스트셀러 제목 가져오기
for i in [1,2]:
    if i == 1:
        for j in range(1,11):
            title = driver.find_element(By.XPATH, f'//*[@id="tabRoot"]/div[4]/ol[{i}]/li[{j}]/div[2]/div[2]/div[3]/div/div/a').text
            #print(title) 
            titles.append(title)
    if i == 2:
        for j in range(1,41):
            title = driver.find_element(By.XPATH, f'//*[@id="tabRoot"]/div[4]/ol[{i}]/li[{j}]/div[2]/div[2]/div[3]/div/div/a').text
            #print(title)     
            titles.append(title)
 
print(titles)
            
print(len(titles))


#실습3 데이터 csv로 저장
today = datetime.now().strftime('%Y%m%d')

file = codecs.open(f'{today}books50list.csv', mode="w", encoding="utf-8")
writer = csv.writer(file)
writer.writerow(["rank", "title"])

#실습4.베스트셀러 50 순위, 제목 가져오기

for i, title in enumerate(titles, start=1):
    rank = i  
    writer.writerow([rank,title])
    
file.close()
