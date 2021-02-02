
# Crispy Dollop

The essence of this problem is given an integer the goal is to return hopefully another integer comprises of the same digits but rearranged in a way such that it is the next biggest possible number. This problem can have one of two outcomes:

1. The next largest number can be found by rearranging the digits.
2. There is no possible arrangement of the digits that can give a larger number.

The second outcome can be caused due to the given number being repdigit or sometimes known as monodigit for example: 1111 or the given number itself being the largest possible number already.

### Solution

Initially, I figured the goal is to find the largest possible number that can be formed using the digits in the given number which is rather trivial by just sorting the digits in a descending order resulting in the largest possible number given any combinations. However, finding the next largest number given a number is not as trivial as it may seems.

By using pen and paper and trying a few different approaches on small numbers that can be easily manipulated to find the next largest number, the general algorithm can be described as follows:

1. Given a number say 21581957621 we have to find a pivot (starting from the RHS) in this string of number such that the next number in succession has an order smaller in magnitude. That is (say the last digit has an index of 0 and the first digit has an index of 10 in this example) We then loop though the string of numbers starting from the RHS finding the pivot. The pivot is defined such that for the i-th digit the following digit (i+1) must be of a smaller magnitude (in this case it is the digit 5 or index 4).
2. The string of number can then be split into two sub-strings (i.e. 2158195 and 7621). With the pivot value of 5 handy the next task is to find the smallest digit in the latter substrings that is larger than the pivotal value (in this case 6).
3. Finally, a swap operation is performed between these two digits and the later sub-strings can be ordered using standard sorting algorithms such as quick-sort, merge-sort or bubble-sort just to name a few and concatenated to form the next largest number as requested (21581961257).

With this algorithm, I feel that manipulation can be done much easily by converting the string of digits into an array which can be done easily using JavaScript's string, map and split methods and the reverse of this operation can be achieved using the function parseInt. As for sorting, due to time constraints bubble-sort algorithm was implemented due to its simplicity and the consideration that it is a one-off operation and the worst time complexity is of O(N^2). Lastly, there are probably alternative ways of manipulating the integer that may be more efficient that I am unaware of.

The cases of finding the next biggest negative number (more-negative) can also be considered.

### Improvements

The best improvement to this method would probably be the sorting algorithm as much more efficient algorithm such as Quick-sort can be used in place of bubble-sort which has linear space-time complexity improving the efficiency of the overall code.

# Scaling Umbrella
This main challenge as mentioned in the coding challenge is the traversing of the 2d-array in a clockwise spiral fashion which is nicely illustrated in the challenge. The tasks given is given a 2d-array the function should return a 1d-array with elements ordered in the clockwise spiral manner.

### Solution
This problem can be easier visualised by using a small example such as a 3x3 array plotting the coordinates as such:

                                        0,0     1,0     2,0
                                        0,1     1,1     2,1
                                        0,2     1,2     2,2

With the clockwise spiral pattern handy the following is the order of visiting the members in the 2d-array:

                    0,0 --> 1,0 --> 2,0 --> 2,1 --> 2,2 --> 1,2 --> 0,2 --> 0,1 --> 1,1

This order of visiting the elements of the 2d-array can be achieved by using 4 for-loops and two counters for the rows and columns respectively (incrementing or decrementing the counters after every for-loops) With this we can see that the a 2d-array of any size can be scaled up using the similar method.

### Improvements
I feel that overall this is quite optimised and do not see an easier way of achieving the same result.
