import Logo from "../assets/logo.svg"

const BalanceContent = () => {
    return (
        <div className="flex items-center justify-between bg-primary-soft-red px-6 py-4 rounded-xl">
            <div className="flex flex-col gap-1">
                <h1 className="text-xs text-white font-light">My balance</h1>
                <h1 className="text-xl text-white font-bold">$921.48</h1>
            </div>
            <img src={Logo} className="w-12" />
        </div>
    )
}

export default BalanceContent