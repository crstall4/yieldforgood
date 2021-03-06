import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import WalletLink from "walletlink";
import project from "../config/project.json"

const getWeb3ModalConfig = (theme) => ({
	network: "mainnet",
	cacheProvider: true,
	theme: theme,
	providerOptions: {
		walletconnect: {
			package: WalletConnectProvider,
			options: {
				infuraId: project.provider.id
			}
		},
		// portis: {
		// 	package: Portis,
		// 	options: {
		// 		id: "2f71ab54-dc11-41eb-86e3-c44d74767e44"
		// 	}
		// },
		walletlink: {
			package: WalletLink,
			options: {
				appName: "friesDAO",
				infuraId: project.provider.id,
				chainId: 1,
				appLogoUrl: "https://fries.fund/friesdao-square.png",
				darkMode: theme == "dark"
			}
		}
	}
})

export default getWeb3ModalConfig