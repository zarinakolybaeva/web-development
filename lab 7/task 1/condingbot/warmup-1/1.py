weekday = 0
vacation = 5

def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False

x = sleep_in(1, 2)
print(x)