import random
# height = 1
# stars = 1
# for i in range(height):
#     print((' ' * (height - i)) + ('*' * stars))
#     stars += 2


# for i in range(1,10):
#     for j in range(1,10):
#         print(str(i)+"*"+str(j)+"="+ str(i*j))
#     print("")


# loop = 1
# while(loop<6):
#     num = int(input("請輸入1-1000內的數:"))
#     if num % 2 == 0:
#         print(str(num) + "是偶數")
#     else:
#         print(str(num) + "是基數")
#     loop +=1

# words = str(input("請輸入你的想法:"))
# print("裡面有",len(words),"個字")

# text = "hello how are you"
# x = text.split(" ")
# print(x)
# for i in x:
#     print(i[0])


while(True):
    user = input("剪刀石頭布!:")
    usernum = 0
    if user == "剪刀":
        usernum = 1
    elif user == "石頭":
        usernum = 2
    elif user == "布":
        usernum = 3

    
    i = random.randint(1,3)
    
    if usernum == i:
        
        print("平手")
        
    elif usernum > i:
        print("玩家獲勝")
        break
    elif usernum < i:
        print("電腦獲勝")
        break
