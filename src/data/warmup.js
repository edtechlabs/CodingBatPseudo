module.exports = [
  {
    title: 'Warmup-1',
    name: 'SleepIn',
    question: `The parameter WEEKDAY is TRUE if it is a weekday, and the parameter
       VACATION is FALSE if we are on vacation. We sleep in if it is not a weekday or
       we're on vacation. Output <code>"TRUE"</code> if we sleep in, "FALSE" if we do not.`,
    inputs: [
      '(TRUE, TRUE)',
      '(TRUE, FALSE)',
      '(FALSE, TRUE)',
      '(FALSE, FALSE)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'MonkeyTrouble',
    question: `We have two monkeys, a and b, and the parameters ASMILE and
            BSMILE indicate if each is smiling. We are in trouble if they are both smiling
            or if neither of them is smiling. Output <code>"TRUE"</code> if we are in trouble, "FALSE" otherwise.`,
    inputs: [
      '(TRUE, TRUE)',
      '(FALSE, FALSE)',
      '(TRUE, FALSE)',
      '(FALSE, TRUE)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'SumDouble',
    question: `Given two numbers, output their sum. Unless the two values are the same,
     then output double their sum.`,
    inputs: [
      '(1, 2)',
      '(3, 2)',
      '(2, 2)',
      '(-1, 0)',
      '(3, 3)',
      '(0, 0)',
      '(0, 1)',
      '(3, 4)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'Diff21',
    question: `Given an number, N, output the absolute difference between N and 21,
              except output double the absolute difference if N is over 21.`,
    inputs: [
      '(19)',
      '(10)',
      '(21)',
      '(22)',
      '(25)',
      '(30)',
      '(0)',
      '(1)',
      '(2)',
      '(-1)',
      '(-2)',
      '(50)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'ParrotTrouble',
    question: `We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
  We are in trouble if the parrot is talking and the hour is before 7 or after 20.
  Output <code>"TRUE"</code> if we are in trouble.`,
    inputs: [
      '(TRUE, 6)',
      '(TRUE, 7)',
      '(FALSE, 6)',
      '(TRUE, 21)',
      '(FALSE, 21)',
      '(TRUE, 23)',
      '(FALSE, 23)',
      '(TRUE, 20)',
      '(FALSE, 12)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'Makes10',
    question: 'Given 2 numbers, A and B, Output <code>"TRUE"</code> if one if them is 10 or if their sum is 10.',
    inputs: [
      '(9, 10)',
      '(9, 9)',
      '(1, 9)',
      '(10, 1)',
      '(10, 10)',
      '(8, 2)',
      '(8, 3)',
      '(10, 42)',
      '(12, -2)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'NearHundred',
    question: `Given a number N, Output <code>"TRUE"</code> if it is within 10 of 100 or 200.`,
    inputs: [
      '(93)',
      '(90)',
      '(89)',
      '(110)',
      '(111)',
      '(121)',
      '(0)',
      '(5)',
      '(191)',
      '(189)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'PosNeg',
    question: `Given 2 number values, Output <code>"TRUE"</code> if one is negative and one is positive.
        Except if the parameter <code>NEGATIVE</code> is TRUE, then output <code>"TRUE"</code> only if both are negative.`,
    inputs: [
      '(1, -1, FALSE)',
      '(-1, 1, FALSE)',
      '(-4, -5, TRUE)',
      '(-4, -5, FALSE)',
      '(-4, 5, FALSE)',
      '(-4, 5, TRUE)',
      '(1, 1, FALSE)',
      '(-1, -1, FALSE)',
      '(1, -1, TRUE)',
      '(-1, 1, TRUE)',
      '(1, 1, TRUE)',
      '(-1, -1, TRUE)',
      '(5, -5, FALSE)',
      '(-6, 6, FALSE)',
      '(-5, -6, FALSE)',
      '(-2, -1, FALSE)',
      '(1, 2, FALSE)',
      '(-5, 6, TRUE)',
      '(-5, -5, TRUE)',
    ],
  }, {
    title: 'Warmup-1',
    name: 'NotString',
    question: `Given a string, output a new string where "not " has been added to the front. However,
    if the string already begins with "not", output the string unchanged. You can use the method STRING.SubStr(S,L)
    where S is the first index in the substring (first char is 0!) and L is how many chars you want`,
    inputs: [
      "('candy')",
      "('x')",
      "('not bad')",
      "('bad')",
      "('not')",
      "('is not')",
      "('no')",
    ],
  }, {
    title: 'Warmup-1',
    name: 'Front3',
    inputs: [
      "('Java')",
      "('Chocolate')",
      "('abc')",
      "('abcXYZ')",
      "('ab')",
      "('a')",
      "('')",
    ],
    question: `Given a string, we'll say that the front is the first 3 chars of the string.
            If the string length is less than 3, the front is whatever is there. Return a new
            string which is 3 copies of the front. You can use the method STRING.SubStr(S,L)
            where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
  }, {
    title: 'Warmup-1',
    name: 'Or35',
    inputs: [
      '(3)',
      '(10)',
      '(8)',
      '(15)',
      '(5)',
      '(4)',
      '(9)',
      '(4)',
      '(7)',
      '(6)',
      '(17)',
      '(18)',
      '(29)',
      '(20)',
      '(21)',
      '(22)',
      '(45)',
      '(99)',
      '(100)',
      '(101)',
      '(121)',
      '(122)',
      '(123)',
    ],
    question: `Output <code>"TRUE"</code> if the given non- negative number is a multiple of 3 or a
            multiple of 5.(Hint: Use the < code > mod</code > operator)`,
  }, {
    title: 'Warmup-1',
    name: 'Front22',
    inputs: [
      "('kitten')",
      "('Ha')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('Logic')",
    ],
    question: `Given a string, take the first 2 chars and output the string with the 2
chars added at both the front and back, so 'kitten' yields 'kikittenki'. You can use the method STRING.SubStr(S,L)
where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
  }, {
    title: 'Warmup-1',
    name: 'StartHi',
    inputs: [
      "('hi there')",
      "('hi')",
      "('hello hi')",
      "('he')",
      "('h')",
      "('')",
      "('ho hi')",
      "('hi ho')",
    ],
    question: `Given a string, Output <code>"TRUE"</code> if the string starts with 'hi'and
FALSE otherwise. You can use the method STRING.SubStr(S,L)
where S is the first index in the substring (first char is 0!) and L is how many chars you want.`,
  }, {
    title: 'Warmup-1',
    name: 'IcyHot',
    inputs: [
      '(120, -1)',
      '(-1, 120)',
      '(2, 120)',
      '(-1, 100)',
      '(-2, 120)',
      '(120, 120)',
    ],
    question: `Given two temperatures, Output <code>"TRUE"</code> if one is less than 0 and the
other is greater than 100.`,
  }, {
    title: 'Warmup-1',
    name: 'In1020',
    inputs: [
      '(12, 99)',
      '(21, 12)',
      '(8, 99)',
      '(99, 10)',
      '(20, 20)',
      '(21, 21)',
      '(9, 9)',
    ],
    question: `Given 2 number values, Output <code>"TRUE"</code> if either or both of them is in the range
10..20 inclusive.`,
  }, {
    title: 'Warmup-1',
    name: 'HasTeen',
    inputs: [
      '(13, 20, 10)',
      '(20, 19, 10)',
      '(20, 10, 13)',
      '(1, 20, 12)',
      '(19, 20, 12)',
      '(12, 20, 19)',
      '(12, 9, 20)',
      '(12, 18, 20)',
      '(14, 2, 20)',
      '(4, 2, 20)',
      '(11, 22, 22)',
    ],
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values,
Output <code>"TRUE"</code> if 1 or more of them are teen.`,
  }, {
    title: 'Warmup-1',
    name: 'LoneTeen',
    inputs: [
      '(13, 99)',
      '(21, 19)',
      '(13, 13)',
      '(14, 20)',
      '(20, 15)',
      '(16, 17)',
      '(16, 9)',
      '(16, 18)',
      '(13, 19)',
      '(13, 20)',
      '(6, 18)',
      '(99, 13)',
      '(99, 99)',
    ],
    question: `We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
Given 2 int values, Output <code>"TRUE"</code> if one or the other is teen, but not both.`,
  }, {
    title: 'Warmup-1',
    name: 'MixStart',
    inputs: [
      "('mix snacks')",
      "('pix snacks')",
      "('piz snacks')",
      "('nix')",
      "('ni')",
      "('n')",
    ],
    question: `Output <code>"TRUE"</code> if the given string begins with 'mix', except the 'm' can be
anything, so 'pix', '9ix'..all count. You can use the method STRING.SubStr(S,L) to get a substring
where S is the first index in the substring (first char is 0!) and L is how many chars you want (at max).`,
  },
  {
    title: 'Warmup-1',
    name: 'IntMax',
    inputs: [
      '(1, 2, 3)',
      '(1, 3, 2)',
      '(3, 2, 1)',
      '(9, 3, 3)',
      '(3, 9, 3)',
      '(3, 3, 9)',
      '(8, 2, 3)',
      '(-3, -1, -2)',
      '(6, 2, 5)',
      '(5, 6, 2)',
      '(5, 2, 6)',
    ],
    question: 'Given three int values, A, B, and C, output the largest.',
  },
  {
    title: 'Warmup-1',
    name: 'Close10',
    inputs: [
      '(8, 13)',
      '(13, 8)',
      '(13, 7)',
      '(7, 13)',
      '(9, 13)',
      '(13, 8)',
      '(10, 12)',
      '(11, 10)',
      '(5, 21)',
      '(0, 20)',
      '(0, 20)',
      '(10, 10)',
    ],
    question: `Given 2 int values, output whichever value is nearest to the value 10,
  or output 0 in the event of a tie.`,
  },
  {
    title: 'Warmup-1',
    name: 'StringE',
    inputs: [
      "('Hello')",
      "('Heelle')",
      "('Heelele')",
      "('HII')",
      "('e')",
      "('')",
    ],
    question: `Output <code>"TRUE</code>" if the given string contains between 1 and 3 <code>e</code> chars. 
    Hint: the length of a string can be found using the <code>STR.Length()</code> method, and you can access one char
    within a string using brackets, so if <code>ST = "ABC"</code> then <code>ST[1]</code> gives you a <code>B</code>`
  },
  {
    title: 'Warmup-1',
    name: 'LastDigit',
    inputs: [
      '(7, 17)',
      '(6, 17)',
      '(3, 113)',
      '(114, 113)',
      '(114, 4)',
      '(10, 0)',
      '(11, 0)',
    ],
    question: `Given two non - negative int values, Output <code>"TRUE"</code> if they have the same
last digit, such as with 27 and 57. Note that the <code>mod</code> operator computes
remainders, so <code>17 mod 10</code> is 7.`,
  }, {
    title: 'Warmup-1',
    name: 'EveryNth',
    inputs: [
      "('Miracle', 2)",
      "('abcdefg', 2)",
      "('abcdefg', 3)",
      "('Chocolate', 3)",
      "('Chocolates', 3)",
      "('Chocolates', 4)",
      "('Chocolates', 100)",
    ],
    question: `Given a non - empty string and an int N, output the string made starting
with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6,
                   ...and so on. N will always be 1 or more.`,
  },
  {
    title: 'Warmup-2',
    name: 'StringTimes',
    inputs: [
      "('Hi', 2)",
      "('Hi', 3)",
      "('Hi', 1)",
      "('Hi', 0)",
      "('Hi', 5)",
      "('Oh Boy!', 2)",
      "('x', 4)",
      "('', 4)",
      "('code', 2)",
      "('code', 3)",
    ],
    question: `Given a string and a non-negative integer N, output a larger string that is N
copies of the original string.`,
  }, {
    title: 'Warmup-2',
    name: 'FrontTimes',
    inputs: [
      "('Chocolate', 2)",
      "('Chocolate', 3)",
      "('Abc', 3)",
      "('Ab', 4)",
      "('A', 4)",
      "('',4)",
      "('Abc', 0)",
    ],
    question: `Given a string and a non - negative int n, we'll say that the front of the string is the first 3 chars,
or whatever is there if the string is less than length 3. Return n copies of the front.`,
  }, {
    title: 'Warmup-2',
    name: 'StringBits',
    inputs: [
      "('Hello')",
      "('Hi')",
      "('Heeololeo')",
      "('HiHiHi')",
      "('')",
      "('Greetings')",
      "('Chocolate')",
      "('pi')",
      "('Hello Kitten')",
      "('hxaxpxpxy')",
    ],
    question: `Given a string, output a new string made of every other char starting
with the first, so "Hello" yields "Hlo".`,
  }, {
    title: 'Warmup-2',
    name: 'StringSplosion',
    question: 'Given a non-empty string like "Code" output a string like "CCoCodCode".',
    inputs: [], // TODO: write inputs here
  }, {
    title: 'Warmup-2',
    name: 'Last2',
    inputs: [
      "('hixxhi')",
      "('xaxxaxaxx')",
      "('axxaaxx')",
      "('xxaxxaxxaxx')",
      "('xaxaxaa')",
      "('xxxx')",
      "('13121312')",
      "('11212')",
      "('13121311')",
      "('hi')",
      "('h')",
      "('')",
    ],
    question: `Given a string, output the count of the number of times that a substring
length 2 appears in the string and also as the last 2 chars of the string, so
"hixxxhi" yields 1(we won't count the end substring).`,
  }, {
    title: 'Warmup-2',
    name: 'ArrayCount9',
    inputs: [
      '([1,2,9])',
      '([1,9,9])',
      '([1,9,9,3,9])',
      '([1,2,3])',
      '([])',
      '([4,2,4,3,1])',
      '([9,2,4,3,1])',
    ],
    question: 'Given an array of ints, output the number of 9\'s in the array.',
  }, {
    title: 'Warmup-2',
    name: 'ArrayFront9',
    inputs: [
      '([1,2,9,3,4])',
      '([1,2,3,4,9])',
      '([1,2,3,4,5])',
      '([9,2,3])',
      '([1,9,9])',
      '([1,2,3])',
      '([1,9])',
      '([5,5])',
      '([2])',
      '([9])',
      '([])',
      '([3,9,2,3,3])',
    ],
    question: `Given an array of ints, Output <code>"TRUE"</code> if one of the first 4 elements in
          the array is a 9. The array length may be less than 4.`,
  }, {
    title: 'Warmup-2',
    name: 'Array123',
    question: `Given an array of ints, Output <code>"TRUE"</code> if the sequence of numbers 1, 2, 3
        appears in the array somewhere.`,
    inputs: [], // TODO
  }, {
    title: 'Warmup-2',
    name: 'StringMatch',
    inputs: [
      "('xxcaazz', 'xxbaaz')",
      "('abc', 'abc')",
      "('abc', 'axc')",
      "('hello', 'he')",
      "('he', 'hello')",
      "('', 'hello')",
      "('aabbccdd', 'abbbxxd')",
      "('aaxxaaxx', 'iaxxai')",
      "('iaxxai', 'aaxxaaxx')",
    ],
    question: `Given 2 strings, a and b, output the number of the positions where they contain the same length 2 substring.
          So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.`,
  }, {
    title: 'Warmup-2',
    name: 'StringX',
    inputs: [
      "('xxHxix')",
      "('abxxxcd')",
      "('xabxxxcdx')",
      "('xKittenx')",
      "('Hello')",
      "('xx')",
      "('x')",
      "('')",
    ],
    question: `Given a string, output a version where all the "x" have been removed.
            Except an "x" at the very start or end should not be removed.`,
  }, {
    title: 'Warmup-2',
    name: 'AltPairs',
    inputs: [
      "('kitten')",
      "('Chocolate')",
      "('CodingHorror')",
      "('yak')",
      "('ya')",
      "('y')",
      "('')",
      "('ThisThatTheOther')",
    ],
    question: `Given a string, output a string made of the chars at indexes 0,1, 4,5, 8,9 ...
            so "kittens" yields "kien".`,
  }, {
    title: 'Warmup-2',
    name: 'StringYak',
    inputs: [
      "('yakpak')",
      "('pakyak')",
      "('yak123ya')",
      "('yak')",
      "('yakxxxyak')",
      "('xxcaazz', 'hiyakHi')",
      "('xxxyakyyyakzzz')",
    ],
    question: `Suppose the string "yak" is unlucky. Given a string, output a version
            where all the "yak" are removed, but the "a" can be any char. The "yak" strings
            will not overlap.`,
  }, {
    title: 'Warmup-2',
    name: 'Array667',
    inputs: [
      '([6,6,2])',
      '([6,6,2,6])',
      '([6,7,2,6])',
      '([6,6,2,7,6,7])',
      '([1,6,3])',
      '([6,1])',
      '([])',
      '([3,6,7,6])',
      '([3,6,6,7])',
      '([6,3,6,6])',
      '([6,7,6,6])',
      '([1,2,3,5,6])',
      '([1,2,3,6,6])',
    ],
    question: `Given an array of ints, output the number of times that two 6's
              are next to each other in the array. Also count instances where the second
              "6" is actually a 7.`,
  }, {
    title: 'Warmup-2',
    name: 'NoTriples',
    inputs: [
      '([1,1,2,2,1])',
      '([1,1,2,2,2,1])',
      '([1,1,2,2,2,1])',
      '([1,2,1])',
      '([1,1,1])',
      '([1,1])',
      '([1])',
      '([1])',
      '([])',
    ],
    question: `Given an array of ints, we'll say that a triple is a value appearing 3 times
                in a row in the array. Output <code>"TRUE"</code> if the array does not contain any triples.`,
  }, {
    title: 'Warmup-2',
    name: 'Has271',
    inputs: [
      '([1,2,7,1])',
      '([1,2,8,1])',
      '([2,7,1])',
      '([3,8,2])',
      '([2,7,3])',
      '([2,7,4])',
      '([2,7,-1])',
      '([2,7,-2])',
      '([4,5,3,8,0])',
      '([2,7,5,10,4])',
      '([2,7,-2,4,9,3])',
      '([2,7,5,10,1])',
      '([2,7,-2,10,2])',
    ],
    question: `Given an array of ints, Output <code>"TRUE"</code> if it contains a 2, 7, 1
                pattern -- a value, followed by the value plus 5, followed by the value
                minus 1. Additionally the 271 counts even if the "1" differs by 2 or less
                from the correct value.`,
  }
];