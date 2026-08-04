import { RouterProvider } from "react-router-dom"
import { router } from "./App.routes"
import { useAuth } from "../features/auth/hooks/useAuth";
import { useEffect } from "react";

function App() {
  const { getMe, isInitialized, loading } = useAuth();
  
  useEffect(() => {
    getMe();
  }, [getMe]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white selection:bg-neutral-800">
        <div className="flex flex-col items-center gap-6">
          {/* Pulsing Logo */}
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl shadow-white/15 animate-pulse">
            <svg className="w-9 h-9 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Context.ai</h2>
            <p className="text-xs text-neutral-500 tracking-widest uppercase">Initializing secure session...</p>
          </div>
          {/* Spinner */}
          <div className="w-5 h-5 border-2 border-neutral-800 border-t-white rounded-full animate-spin mt-2"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
      {/* Global Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center animate-fade-in">
          <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-2xl flex flex-col items-center gap-4 shadow-2xl max-w-xs w-full text-center">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Please wait</h4>
              <p className="text-xs text-neutral-400 mt-1">Connecting to authentication services...</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App