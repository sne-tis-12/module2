let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
let contractABI = undefined;
let contract = undefined;

let prizeMoney = document.getElementById("prize-money");
let guessInput = document.getElementById("guess-input");
let userAddress = document.getElementById("user-address");
let btnWithdraw = document.getElementById("btn-withdraw");
let btnContainer = document.getElementById("btn-container");
let btnGuess = document.getElementById("btn-guess");



if (window.ethereum && window.ethereum.isMetaMask) {
    console.log("MetaMask is installed!");
    fetchContractABI();
}
else {
    alert("Please install MetaMask to use this dApp!");
}

async function fetchContractABI() {
    const response = await fetch("http://localhost:3000/artifacts/contracts/MyContract.sol/MyContract.json")
    const responseJSON = await response.json();
    contractABI = responseJSON.abi;
    // console.log(contractABI);
    
    getMyContract();
    addEventListeners();
    await getAccount();
    await getPrizeMoney();
    await makeGuess();
}

function getMyContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    // console.log(contract);
    
}

function addEventListeners() {
    console.log("EVENT LISTENERS ADDED!")
    contract.on("CorrectGuess", async () => {
        console.log("Correct guess!");
        alert("You win! Withdraw your prize money!");
        await getPrizeMoney();
        await withdrawPrizeMoney();
    });
    contract.on("IncorrectGuess", async () => {
        console.log("Incorrect guess!");
        alert("You lose! Try again!");
        await getPrizeMoney();
    });
    
}

async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    userAddress.value = account;
    userAddress.disabled = true;

    btnWithdraw.disabled = true;
    btnContainer.classList.add("disabled");

    console.log(account);


}

async function getPrizeMoney() {
    const prizeMoneyWei = await contract.getEtherAmount();
    prizeMoney.innerText = ethers.utils.formatEther(prizeMoneyWei);
}

async function makeGuess() {
    btnGuess.addEventListener("click", async () => {
        const userGuess = guessInput.value;

        if (userGuess == "") {
            alert("Please enter a number!");
            return;
        }

        const guessCost = ethers.utils.parseEther("5");
        const tx = await contract.makeGuess(userGuess, { value: guessCost });
        await tx.wait();
        
    });
}

async function withdrawPrizeMoney() {
    btnWithdraw.disabled = false;
    btnContainer.classList.remove("disabled");
    
    btnWithdraw.addEventListener("click", async () => {  
        await contract.widthdraw(userAddress.value);    
        alert("Prize money withdrawn!");
        window.location.reload();
    });
}

