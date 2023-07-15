# Test Your Luck DApp


🎲 Test Your Luck is a decentralized application (DApp) where users can deposit 5 Ether and try to guess a number. If their guess is correct, they win the entire prize money. Otherwise, their deposit is added to the prize pool for the next round.

🔥 Give it a try and see if you can win big!

## Webiste 
[![Screenshot-2023-07-16-014751.png](https://i.postimg.cc/ZYFj7Jgk/Screenshot-2023-07-16-014751.png)](https://postimg.cc/QVCpVZhS)


## Contract

The core logic of the Test Your Luck DApp is implemented in the Solidity smart contract `MyContract.sol`. The contract handles the guessing game and prize management.

### Contract Details

- `guessNum`: The target number that users need to guess correctly.
- `requiredDeposit`: The amount of Ether required to participate in the game.
- `CorrectGuess` event: Triggered when a user guesses the correct number.
- `IncorrectGuess` event: Triggered when a user's guess is incorrect.

### Functionality

- `getEtherAmount()`: Retrieves the current balance of the contract.
- `makeGuess(uint userGuess)`: Allows a user to make a guess by providing their chosen number. Requires a deposit of at least 5 Ether.
- `widthdraw(address payable winner)`: Allows the winner to withdraw the entire prize money.

## Frontend

The Test Your Luck DApp uses the ether.js library to interact with the Ethereum network on the frontend. The frontend is implemented in JavaScript and provides an intuitive user interface for users to participate in the game and manage their winnings.

### Features

- `makeGuess()`: Submits the user's guess and initiates the game.
- `withdrawPrizeMoney()`: Allows the winner to withdraw their prize money.

## Getting Started

To run the Test Your Luck DApp locally, follow these steps:

1. Start a local Ethereum network using Hardhat:
   ```
   npx hardhat node
   ```

2. Deploy the smart contract to the local network:
   ```
   npx hardhat run --network localhost scripts/deploy.js
   ```

3. Start the frontend:
   ```
   npm start
   ```

4. Connect your Metamask wallet to the local network.

5. Visit the DApp in your browser and start testing your luck!

## Events

The DApp emits the following events to provide feedback to users:

- `CorrectGuess`: Triggered when a user guesses the correct number.
- `IncorrectGuess`: Triggered when a user's guess is incorrect.

## Acknowledgement
I would like to express my sincere gratitude to [Metacrafters](https://www.metacrafters.io/) for providing the Avalanche course and their valuable guidance and support throughout the development of this Test Your Luck DApp. This project was part of their course assessment, and I am grateful for the knowledge and skills gained from the course.

## Wanna Talk
Feel free to reach out if you have any questions or feedback. [Sneha Kumari](https://www.linkedin.com/in/snetis/)
Happy gaming! 🎉