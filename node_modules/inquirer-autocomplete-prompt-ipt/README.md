# inquirer-autocomplete-prompt-ipt

Autocomplete prompt for [inquirer](https://github.com/SBoudrias/Inquirer.js) fork, optimized for [iPipeTo](https://github.com/ruyadorno/ipt).

[![build status](https://secure.travis-ci.org/ruyadorno/inquirer-autocomplete-prompt.svg)](http://travis-ci.org/ruyadorno/inquirer-autocomplete-prompt)

## :warning: Important info about this fork

This is an attempt to keep a better maintained fork of **inquirer-autocomplete-prompt** since it's an important dependency of [iPipeTo](https://github.com/ruyadorno/ipt) and I do care about having nested dependencies up to date.

Published versions of this fork can be find at [inquirer-autocomplete-prompt-ipt](https://www.npmjs.com/package/inquirer-autocomplete-prompt-ipt) package in **npm**. e.g: `npm install inquirer-autocomplete-prompt-ipt` if you want to use it :blush:

<br />

## Usage


This prompt is anonymous, meaning you can register this prompt with the type name you please:

```javascript
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
inquirer.prompt({
  type: 'autocomplete',
  ...
})
```

Change `autocomplete` to whatever you might prefer.

### Options

> **Note:** _allowed options written inside square brackets (`[]`) are optional. Others are required._

`type`, `name`, `message`, `source`[, `pageSize`, `filter`, `when`, `suggestOnly`, `validate`]

See [inquirer](https://github.com/SBoudrias/Inquirer.js) readme for meaning of all except **source** and **suggestOnly**.

**Source** will be called with previous answers object and the current user input each time the user types, it **must** return a promise.

**Source** will be called once at at first before the user types anything with **undefined** as the value. If a new search is triggered by user input it maintains the correct order, meaning that if the first call completes after the second starts, the results of the first call are never displayed.

**suggestOnly** is default **false**. Setting it to true turns the input into a normal text input. Meaning that pressing enter selects whatever value you currently have. And pressing tab autocompletes the currently selected value in the list. This way you can accept manual input instead of forcing a selection from the list.

**validate** is only active when **suggestOnly** is set to **true**. It behaves like validate for the input prompt.


#### Example

```javascript
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
inquirer.prompt([{
  type: 'autocomplete',
  name: 'from',
  message: 'Select a state to travel from',
  source: function(answersSoFar, input) {
    return myApi.searchStates(input);
  }
}]).then(function(answers) {
  //etc
});
```

See also [example.js](https://github.com/mokkabonna/inquirer-autocomplete-prompt/blob/master/example.js) for a working example.

I recommend using this package with [fuzzy](https://www.npmjs.com/package/fuzzy) if you want fuzzy search. Again, see the example for a demonstration of this.

![Autocomplete prompt](./inquirer.gif)

## Credits
[Martin Hansen](https://github.com/mokkabonna/)

## License

ISC
