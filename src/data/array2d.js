module.exports = [
  {
    //title is the category it appears in on the homepage
    title: '2D Array',
    // Pseudocode problems should start with a capital letter
    name: 'FindDiagonal',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6],[7, 8, 9]])`,
      '([[2, 3], [6, 4]])',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]])',
      '([[13, 6], [1, 2], [4, 6]])',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]])',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Give a two - dimensional array ARR, output a one - dimensional array that contains the elements 
    of its <i>primary diagonal</i > - that is, the elements whose row index and 
    column index are the same. 
    You can assume ARR has the same number of rows and columns.
    You can make a new array of length L with the command <code>NEW = new Array(L)</code> `,
    solution: `method FindDiagonal(ARR)
  // ARR.Length() will give the number of rows
  // ARR[0].Length() would give the # of columns
  NEW = new Array(ARR.Length())
  loop I from 0 to ARR.Length() - 1
    NEW[I] = ARR[I][I]
  end loop
  output NEW
end method`,
  }, {
    //title is the category it appears in on the homepage
    title: '2D Array',
    // Pseudocode problems should start with a capital letter
    name: 'FindValue',
    // the inputs that we are going to use to to test the code. An array of strings.
    // Each string should be parentheses, and inside you can have one or more arrays,
    // strings, ints, TRUE/FALSE, whatever. check warmup.js for more examples.
    inputs: [
      `([[1, 2, 3],[4, 5, 6]], 0)`,
      '([[2, 3], [6, 4], [2, 3]], 4)',
      '([["a", "b", "c"],["A", "B", "C"], ["α","β", "ç"]], "A")',
      '([[13, 6], [1, 2], [4, 6]], 6)',
      '([[3, 2, 1, 4],[1, 1, 1, 1], [3, 1, -3, 1], [4, 4, 2, 4]], 4)',
    ],
    // The question itself. Try to make it Pseudocode-y
    question: `Given a two - dimensional array ARR and a search value VAL,
    search the array in reading order - rows then columns - to find the first
    occurence of VAL. Once you find it, output "VAL found at index [R][C]"
    replacing VAL, R, and C with the appropriate values. If it isn't found, output
    "VAL not found". `,
    solution: `method FindValue(ARR, VAL)
  // ARR.Length() will give the number of rows
  // ARR[0].Length() would give the # of columns
  FOUND = FALSE
  loop ROW from 0 to ARR.Length() - 1
    loop COL from 0 to ARR[0].Length() - 1
      if ARR[ROW][COL] = VAL then
        output "" + VAL + " found at index [" + ROW + "][" + COL + "]"
        return
      end if
    end loop
  end loop
  output "" + VAL + " not found"
end method`,
  },
]