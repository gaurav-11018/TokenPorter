# Token Porter
Token Porter is a web application that allows users to connect their wallet, display their address and token balance, and transfer tokens from your account to any account you want.

# Import Links:
`
deployed website: https://token-porter.vercel.app/
video demo:https: https//youtu.be/M7lBlJXRaQk
`


## Installation
Clone this repository:


`git clone https://github.com/gaurav-11018/token-porter.git`

Change into the project directory:

`cd token-porter`

Install dependencies:

`npm install`

Start the development server:

`npm run dev`
Open your browser and navigate to http://localhost:3000.

### OR JUST SKIP ALL THAT AND SEE THE DEPLOYED WEBSITE HERE: https://token-porter.vercel.app/


## Project Structure
hooks: Contains custom React hooks for managing the application's state and behavior.
pages: Contains the main page components for the application.
public: Contains static files such as images, styles, and other assets.
styles: Contains global styles for the application.

## Hooks

### useEthersProvider:
This hook is responsible for connecting to an Ethereum wallet using the MetaMask browser extension. It returns the provider instance, the connected account, and a function to connect the wallet.

### useTokenBalance:
This hook fetches the token balance of the connected account. It takes the account address and provider as arguments and returns the token balance.

### useTokenTransfer: 
This hook handles the token transfer process. It takes the provider, sender address, recipient address, and token amount as arguments, and returns a function to initiate the transfer.

# Navbar: This component displays the navigation bar with a Connect button for connecting to an Ethereum wallet.

# AccountInfo: This component displays the connected Ethereum address and token balance.


License
This project is licensed under the MIT License.
