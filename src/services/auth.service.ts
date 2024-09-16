import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthResponse, AuthTokenResponse } from "@supabase/supabase-js";

export const signupWithEmailPassword = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const supabase = createClientComponentClient();
  const res = await supabase.auth.signUp({ email, password });

  return res;
};

export const loginWithEmailPassword = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const supabase = createClientComponentClient();
  const res = await supabase.auth.signInWithPassword({ email, password });

  return res;
};

export const logOut = async () => {
  const supabase = createClientComponentClient();
  const res = await supabase.auth.signOut();
  return res;
};
