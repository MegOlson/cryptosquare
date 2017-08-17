# _Cryptosquare_

#### _Epicodus practice in Javascript, 8.17.2017_

#### By _**Megan Olson and Kelsey Langlois**_

## Description

_This page has a form that allows the user to enter a message. After pressing the submit button, the user will receive the number the message they entered as a new encoded message._

## Setup/Installation Requirements

* _Clone GitHub repository_
* _Open folder named roman-numerals_
* _Open index.html with web browser of choice_

## Specifications

* Program will return error when field is submitted blank.
  * Example Input: ""
  * Example Output: "error: no input"
* Program will downcase all letters, remove any special characters and spaces.
  * Example Input: "Hello it's sunny today"
  * Example Output: "helloitssunnytoday"
* Program will not encode single letter inputs.
  * Example Input: I
  * Example Output: i
* If input length results in a perfect square, letters are sorted into columns equivalent to square root value and outputted in code blocks with the length of 5 (last block may be less than 5).
  * Example Input: "This is a test sentence, towers!"
  * Example Output: "tsteo hasnw itece sener istts"
* If input length is not a perfect square, letters are sorted into columns corresponding to the first perfect square larger than the input and outputted in code blocks with the length of 5 (last block may be less than 5).
  * Example Input: "This is a test sentence!"
  * Example Output: "tsteh asnit ecsen eist"

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Feel free to email Kelsey at kels.langlois@gmail.com or Megan at meganannetteolson@yahoo.com_

## Technologies Used

_HTML CSS JavaScript jQuery_

### License

*This software is licensed under the MIT license*
 Copyright (c) 2017 **Megan Olson and Kelsey Langlois**
