// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

/*Smart contract has at least two functions
Value of the functions from the smart contract are visible on the frontend of the application */

contract MyContract {
    uint private guessNum = 12;
    uint requiredDeposit = 5 ether;

    event CorrectGuess();
    event IncorrectGuess();

    function getEtherAmount() public view returns(uint256){
        uint256 amount = address(this).balance;
        return amount;
    }


    function makeGuess(uint userGuess) public payable {
        require(msg.value == requiredDeposit, "Insufficient deposit");

        if (userGuess == guessNum) {
            emit CorrectGuess();
        } else {
            emit IncorrectGuess();
        }
    }


    function widthdraw(address payable winner) public{
        winner.transfer(address(this).balance);
    }
}