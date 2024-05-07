# Lab 5 - Starter

- Ruiping Fang
- Melissa Osheroff

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, since unit tests focused on individual units rather than how components interact, they might not be suitable for testing a feature that inherently relies on the integration of multiple systems.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, Unit tests are ideal for verifying the behavior of specific, isolated functionality like input validation, which includes enforcing a maximum character limit. They can effectively ensure tha t the function responsible for checking the message length behaves correctly by accepting messages up to 80 characters and rejecting those that exceed this limit.

## GitHub Pages

[Expose](https://ruiping-fang.github.io/Lab5_Starter/expose.html)

[Explore](https://ruiping-fang.github.io/Lab5_Starter/explore.html)
