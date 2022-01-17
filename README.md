# KM CLI

The Multi-Value Dictionary app is a command line application that stores a multivalue dictionary in memory. All keys and members are strings.

## Installation

Clone the repository
`https://github.com/deivit24/multi-value-dictionary.git`

Install the dependencies:

`npm i`

Install the package globally on your machine:

`npm i -g`

## Usage

To see usage:
`km --help`

You will get this:

```
Usage: index [options] [command]

Options:
  -h, --help                   display help for command

Commands:
  KEYS                         Returns all the keys in the dictionary
  ADD <key> <member>           Adds a member to a collection for a given key
  REMOVE <key> <member>        Removes a member from a key.
  REMOVEALL <key>              Removes all members for a key and removes the key from the dictionary.
  CLEAR                        Removes all keys and all members from the dictionary.
  MEMBERS <key>                Returns the collection of strings for the given key.
  MEMBEREXISTS <key> <member>  Returns whether a member exists within a key. Returns false if the key does not exist.
  ALLMEMBERS                   Returns all the members in the dictionary.
  KEYEXISTS <key>              Returns whether a member exists within a key. Returns false if the key does not exist.
  ITEMS                        Returns all keys in the dictionary and all of their members.
  help [command]               display help for command
```

## Examples

### 1 Add a member to a collection for a given key

input:

`km ADD foo bar`

output:

`Successfully Added!`

### 2 Returns all the keys in the dictionary. Order is not guaranteed.

input:

`km KEYS`

output:

`1) foo`

### 3 Returns the collection of strings for the given key. Return order is not guaranteed. Returns an error if the key does not exists.

input:
`km MEMBERS foo`

output:
`1) bar`

### 4 Removes a member from a key.

Add two more members to `foo` key
input:
km ADD foo baz ; km ADD foo bat;

Return all members from key `foo`
input:

`km MEMBERS foo`

output:

```
1) bar
2) baz
3) bat
```

Remove `bar` from `foo`

input:

`km REMOVE foo bar`

output:

`Member: "bar" successfully removed from key: "foo".`

Return all members from key `foo`

input:

`km MEMBERS foo`

output:

```
1) baz
2) bat
```

### 5 Remove all members for a key and removes the key from the dictionary

input:

`km REMOVEALL foo`

output:

`All members from key: "foo" removed.`

### 6 Remove all keys and all members from the dictionary

Add a couple of key members

input:

`km ADD foo bar ; km ADD foo bat; km ADD python flask`

output:

```
Successfully Added!
Successfully Added!
Successfully Added!
```

Clear

input:

`km CLEAR`

output:

`Cleared`

Check if there are any keys:

input:

`km KEYS`

output:

`You don't have any KEYS yet.`

### 7 Returns whether a key exists or not

input:

`km KEYEXISTS foo`

output:

`false`

input:

`km ADD foo bar ; km KEYEXISTS foo`

output:

`true`

### 8 Returns whether a member exists within a key

input:

`km MEMBEREXISTS foo bar`

output:

`true`

input:

`km KEYEXISTS foo notbar`

output:

`false`

### 9 Returns all the members in the dictionary.

Assumption that there are no key members

Add key members

input:

`km ADD javascript react ; km ADD javascript vue; km ADD python flask`

Get all members

input:

`km ALLMEMBERS`

output:

```
1) react
2) vue
3) flask
```

### 10 Returns all keys in the dictionary and all of their members..

Assumption that there are no key members

Add key members

input:

`km ADD javascript react ; km ADD javascript vue; km ADD python flask`

Get all members

input:

`km ITEMS`

output:

```
1) javascript: react
2) javascript: vue
3) python: flask
```

# Test km app

input:

`npm run test`

output:

```
Test Suites: 6 passed, 6 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        1.645 s, estimated 3 s
Ran all test suites.
```
