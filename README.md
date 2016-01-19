This is a simple timestamp application that uses Clementine to mash together node, express, and less importantly mongo.

The specific user stories implemented for this project:

User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.
User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.
Example

Checking: https://timestamp-manley1971.c9users.io/December%2015,%202015

Returns: {"unix":1450137600000,"natural":"Tue Dec 15 2015"}
