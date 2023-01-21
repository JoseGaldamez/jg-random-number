# jg-random-number

Get a random number in a range. This module is a simple random number generator for Node.js.

You can generate a random integer number (number without decimals) or a random double or float number (number with decimals).

## Install

```
npm install jg-random-number
```

## Usage

You can require the module and use it in your code and create a "jgRandom" like this:

```
const jgRandom = require('jg-random-number');
```

## Get a random integer number

You can get a random integer number with the method "**getRandomInt**" like this:

```
const numberInteger = jgRandom.getRandomInt(1, 10);
```

Note that the first parameter is the minimum number and the second parameter is the maximum number.

## Get a random double number

You can get a random double number with the method "**getRandomDouble**" like this:

```
const numberDouble = jgRandom.getRandomDouble(1, 10, 2);
```

Note that the first parameter is the minimum number and the second parameter is the maximum number. The third parameter is the maximum number of decimals. If you don't specify the third parameter, the default value is 2.

## Get a random float number

You can get a random float number with the method "**getRandomFloat**" like this:

```
const numberDouble = jgRandom.getRandomFloat(1, 10, 2);
```

Note that the first parameter is the minimum number and the second parameter is the maximum number. The third parameter is the maximum number of decimals. If you don't specify the third parameter, the default value is 2.

This method is the same as the method "getRandomDouble". In JavaScript there is a single type of number with decimals, the type "float" is the same as the type "double". You can use both methods to get the same result.

Enjoy!
