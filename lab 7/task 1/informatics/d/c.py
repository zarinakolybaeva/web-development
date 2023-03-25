n = int(input())
sum=0
nums = map(int, input().split())
a = list(nums)
for i in range(n):
    if i > 0:
        sum+=1
    
 print(sum)