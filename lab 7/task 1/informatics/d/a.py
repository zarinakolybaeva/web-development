n = int(input())
nums = map(int, input().split())
a = list(nums)
for i in range(n):
    if i % 2 == 0:
        print(a[i], end=' ')