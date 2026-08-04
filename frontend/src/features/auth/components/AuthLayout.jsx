

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-neutral-800 selection:text-white">
      {/* Left side: Premium Branding & Aesthetic Showcase (hidden on small/medium screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-neutral-950 flex-col justify-between p-12 overflow-hidden border-r border-neutral-900">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        {/* Ambient glow */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-neutral-800 rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neutral-700 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

        {/* Logo/Header */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-lg shadow-white/10">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">Context.ai</span>
        </div>

        {/* Big Typographic Message / Feature Highlight */}
        <div className="relative z-10 my-auto max-w-lg">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-400 mb-6 tracking-wide uppercase">
            Next-Gen Collaboration
          </span>
          <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Engage with AI.<br />
            Collaborate in real-time.
          </h1>
          <p className="text-neutral-400 leading-relaxed text-base">
            Context.ai brings advanced agentic intelligence directly into your workspace. Experience seamless group messaging, intelligent task flows, and context-aware responses in one unified canvas.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-900 pt-6">
          <span>&copy; {new Date().getFullYear()} Context.ai Inc.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
          </div>
        </div>
      </div>

      {/* Right side: Authentication Form Card */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12 relative">
        {/* Mobile Logo Header */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Context.ai</span>
        </div>

        {/* Ambient background blur for mobile */}
        <div className="lg:hidden absolute top-10 right-10 w-48 h-48 bg-neutral-900 rounded-full filter blur-[80px] opacity-40 pointer-events-none"></div>

        {/* Main Content Area */}
        <div className="w-full max-w-md relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">{title}</h2>
            <p className="text-neutral-400 text-sm">{subtitle}</p>
          </div>

          <div className="bg-neutral-950/40 backdrop-blur-xl border border-neutral-900 p-8 rounded-2xl shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
