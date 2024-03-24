from bs4 import BeautifulSoup as bs
import requests
from datetime import datetime
from openpyxl import Workbook

#뉴스 헤더 읽기

#url 대상
url = 'https://news.naver.com/section/102'



# 페이지 요청
response = requests.get(url)

    # 응답 확인
if response.status_code == 200:
    html_text = response.text
    #print(html_text)
# HTML 파싱
soup = bs(response.text, 'html.parser')
 #print(soup)
        
# 뉴스 헤더/언론사 크롤링
titles = soup.select('.sa_text_strong')
titles = list(map(lambda x: x.text.strip(), titles))     
print(titles)
        
presses = soup.select('.sa_text_press')   
presses = list(map(lambda x: x.text, presses))
print(presses)
        
        
#openpyxl Workbook 객체 생성
wb = Workbook()
ws = wb.active
        
#첫번째 행에 제목 변수 추가
ws.append(["index","기사 제목","언론사"])
        
#데이터쓰기
for i, (title, press) in enumerate(zip(titles, presses), start=1):
    ws.append([i, title, press])
        
#파일
today = datetime.now().strftime('%Y%m%d')
filename = f'news_{today}.xlsx'
wb.save(filename)
print(f"엑셀 파일 저장 완료: {filename}")
