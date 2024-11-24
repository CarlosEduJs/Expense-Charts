import BalanceContent from "./components/BalanceContent";
import SpendingContent from "./components/SpendingContent";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col min-w-[400px] gap-3">
          <BalanceContent/>
          <SpendingContent/>
      </div>
    </div>
  )
}

export default App
