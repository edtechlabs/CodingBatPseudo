module.exports = [
  {
    title: 'Collections',
    name: 'Count7s',
    inputType: "collection",
    inputs: [
      '({1, 2, 6})',
      '({3, 7, 7})',
      `({8, 11, 7, 3, 7})`,
      `({7, 7, 7, 7})`,
      `({7.2, 11, 3})`,
      '({2, 7, 2, 11, 7, 24, 7})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of numbers, count and then output how many 7s appear in the collection.`,
    solution: `method Count7s(NUMS)
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      if N = 7 then
        COUNT = COUNT + 1
      end if
    end loop
    
    output COUNT
  end method`,
  },
  {
    title: 'Collections',
    name: 'CountAs',
    inputType: "collection",
    inputs: [
      '({"abc", "ABC", "CBA", "cba", "bcbcbc"})',
      '({"bb","aa","AB","BA"})',
      '({"bat", "abacus"})'
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a collection of strings, count all the strings whose first letter is "a" of "A" and output the count. You can use the STR.SubStr(i, c) method (look at the reference linked above).`,
    solution: `method CountAs(WORDS)
  COUNT = 0
  WORDS.resetNext()
  loop while WORDS.hasNext()
    W = WORDS.getNext()
    if W.SubStr(0,1) = "a" OR W.SubStr(0,1) = "A" then
      COUNT = COUNT + 1
    end if
  end loop
  
  output COUNT
end method`,
  },
  {
    title: 'Collections',
    name: 'SumCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3})',
      '({5, 11, 2, -3})',
      '({7, 0, 0, -7})',
      '({1, 2, 1, 1, 2})',
      '({1, 1, 1, 1})',
      '({2, 7, 2, 103})',
    ],
    question: 'Given a Collection of numbers, return the sum of all the elements.',
    solution: `method SumCollection(NUMS)
    SUM = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      SUM = SUM + N
    end loop
    output SUM
  end method`
  },
  {
    title: 'Collections',
    name: 'AverageCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 2, -8, 0})',
      '({7, 0, 0, -1, -1})',
      '({1, 2, 1, 2, 1})',
      '({1, 1, 1, 1, 1})',
      '({2, 7, 2})',
    ],
    question: 'Given a Collection of numbers, return the mean (average) of all the elements.',
    solution: `method AverageCollection(NUMS)
    SUM = 0
    COUNT = 0
    NUMS.resetNext()
    loop while NUMS.hasNext()
      N = NUMS.getNext()
      COUNT = COUNT + 1
      SUM = SUM + N
    end loop
    output (SUM / COUNT)
  end method`
  },
  {
    title: 'Collections',
    name: 'CountAM',
    inputType: "collection",
    inputs: [
      '({"Smith, Jane","Brown, James"})',
      '({"Duckworth, Eliza", "Altman, Phil"})',
      '({"Mizrahi, Marina", "Nelson, Judd"})',
      '({"A, B", "C, D", "M, N", "P, J", "Q, Z"})'
    ],
    question: `<p>Given a collection of names in the form "Last, First", output the number of names whose last name starts with a letter between A and M in the English alphabet.</p>

    <p>You can assume you have access to a method called <code>Compare(STR1, STR2)</code> that returns <code>0</code> if the two strings are identical, <code>-1</code> if <code>STR1</code> is earlier than <code>STR2</code> in the alphabet, and <code>1</code> if <code>STR1</code> is later than <code>STR2</code> in the alphabet.</p>`,
    solution: `method CountAM(NAMES)
  AM = 0
  NAMES.resetNext()
  loop while NAMES.hasNext()
    N = NAMES.getNext()
    if Compare(N, "N") = -1 then
      AM = AM + 1
    end if
  end loop
  output AM
end method`,
    preamble: `function Compare(str1, str2) { return str1.localeCompare(str2) }`,
  },
  {
    title: 'Collections',
    name: 'RotateLeftCollection',
    inputType: "collection",
    inputs: [
      '({1, 2, 3, 4, 5})',
      '({5, 11, 2, -8, 0})',
      '({7, 0, 0, -1, -1})',
      '({1, 2, 1, 2, 1})',
      '({1, 1, 1, 1, 1})',
      '({2, 7, 2})',
    ],
    question: `Given an collection of numbers, create a new collection that is the same thing, but with the first element moved to the back. If the original collection is empty, return an empty collection. You can make an empty collection using the command "C = new Collection()"`,
    solution: `method RotateLeftCollection(NUMS)
    C = new Collection()
    if NOT NUMS.isEmpty() then
      FIRST = NUMS.getNext()
      loop while NUMS.hasNext()
        C.addItem(NUMS.getNext())
      end loop
      C.addItem(FIRST)
    end if
    output C  
  end method`
  }
]
