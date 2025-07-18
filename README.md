# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

# Solution

First we'll look at the sub/helper functions used for the sort. First, the getMaxIndex function; this function scans the array once, so its complexitiy is linear $\Theta(n)$. This is called n-1 times, so our total comparisons for the maxIndex is $n+(n-1)+n(-2)+... \implies \Theta(n^2)$. The flip function may be called (worst-case) up to two times per search for the maximum ($2n$) which means the complexity in terms of flips is $\Theta(n)$. This means our total runtime complexity is $\Theta(n^2)$.

In terms of comparisons: $\Theta(n^2)$ (due to sum of linear operations over subarray sizes)

In terms of flips: $\Theta(n)$ (due to potential of two flips per elements)

# Disclaimer

I used [this](https://www.sortvisualizer.com/pancakesort/) to help understand the sequence for pancake sort, I find that animations help me a lot.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
