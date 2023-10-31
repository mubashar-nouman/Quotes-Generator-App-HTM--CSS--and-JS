def reverse_string(string):
    return " ".join([stuffs for stuffs in string])

str = "M9.68 7.21997H8.19C7.1 7.21997 6.25 8.06997 6.25 9.15997V10.65C6.25 11.74 7.1 12.59 8.19 12.59H10.1C10.02 14.4 9.6 14.67 8.39 15.38C8.03 15.59 7.92 16.05 8.13 16.41C8.27 16.65 8.52 16.78 8.78 16.78C8.91 16.78 9.04 16.75 9.16 16.68C10.95 15.62 11.62 14.93 11.62 11.85V9.17999C11.61 8.08999 10.74 7.21997 9.68 7.21997Z"


array = str.split(" ")
reversed_array = list(reversed(array))
print(reverse_string(reversed_array))
