'use client'

import { createClient } from '@/lib/supabase/client'

export default function AuthPage() {
  const supabase = createClient()

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#171717" }}>
      {/* Glass Card — full wrap */}
      <div className="relative w-full max-w-md mx-6 rounded-2xl border border-white/10 px-12 py-8 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Subtle inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
        />

        {/* Logo / Brand */}
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold text-white tracking-tight">assembly_checker</h1>
          <p className="mt-1 text-xs text-zinc-400">국회의원실 평가 플랫폼</p>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20 active:bg-white/5"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4" />
            <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853" />
            <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05" />
            <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335" />
          </svg>
          Google로 계속하기
        </button>

        {/* Footer */}
        <p className="mt-5 text-center text-xs text-zinc-600">
          로그인 시{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-zinc-400 transition-colors">이용약관</span>
          {" "}및{" "}
          <span className="underline underline-offset-2 cursor-pointer hover:text-zinc-400 transition-colors">개인정보처리방침</span>
          에 동의합니다
        </p>
      </div>
    </div>
  )
}
