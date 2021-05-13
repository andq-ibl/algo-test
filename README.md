# Blockpass Algo Test

## Quick Start

### Folder Structure

```bash
.
├── README.md
├── algo
│   └── squareDigits.js
├── package-lock.json
├── package.json
└── tests
    └── squareDigits.test.js
```

- `algo`: contain the algorithm need to implement
- `tests`: contain test case for each algorithm

### Run Test

```bash
npm run test
```


## Algorithm List

### Square Digit Test

**Description:**

You are given an integer. The goal of the function is to take every digit from that number and square it. After you square each digit, you concatenate the numbers and return the entire value as an integer.

**Example:**

```
Input: 22
Output: 44
```

**Explain:**

In the example above, we first square each digit:

- 2^2 = 4
- 2^2 = 4

After we square each digit, we take the results and concatenate them together. This gives us **44**
