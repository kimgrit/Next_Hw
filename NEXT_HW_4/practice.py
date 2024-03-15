# 숫자맞추기 게임
# 사용자가 1부터 100까지 숫자 중 하나 생각
#컴퓨터는 1부터 100까지의 중간값 제시
#큰지, 작은지, 맞는지 사용자가 알려줌
#이에 따라 범위를 좁혀나가서 숫자를 맞출때까지 반복
import random

user = int(input("숫자 게임 최대값을 입력해주세요:"))

print(f"1부터 {user}까지의 숫자 중에서 하나 생각하세요")

list = range(1,user+1) #1~100

#exp = random.randint(1,user) #난수 생성 -> 이렇게 하면 진짜 오래 걸릴수도
exp = list[len(list)//2-1]
#시작은 가장 중앙값으로 시작. -> 이진탐색
count = 0

input("READY? > enter\n\n")

while True:
    print(f"\n당신이 생각한 숫자는 {exp}입니까?\n 제시된 숫자보다 정답은 (맞음/큼/작음) 중 입력해주세요")
    answer = (input())
    count = count + 1
    
    if answer == "큼":
        list = range(exp+1,list[-1]+1)
        exp = list[len(list)//2-1]
    elif answer == "작음":
        list = range(list[0],exp+1)
        exp = list[len(list)//2-1]
    else: # answer == "맞음"
        print(f"제가 {count}번만에 맞췄네요!")
        break

