import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { PasswordStrength } from '../ui/password-strength';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Spinner } from '../ui/spinner';

// Validation des emails
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

// Validation des noms d'utilisateur
const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
  return usernameRegex.test(username);
};

// Validation des mots de passe
const validatePassword = (password: string): boolean => {
  // Au moins 8 caractères, une majuscule, un chiffre et un caractère spécial
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
  return passwordRegex.test(password);
};

// Composant de connexion
export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Réinitialiser les erreurs lors de la modification des champs
  useEffect(() => {
    setEmailError(null);
    setError(null);
  }, [email]);

  useEffect(() => {
    setPasswordError(null);
    setError(null);
  }, [password]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation des champs
    let isValid = true;

    if (!email) {
      setEmailError("L'email est requis");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Format d'email invalide");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Le mot de passe est requis");
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Gestion des différents types d'erreurs
        if (error.message.includes('Invalid login credentials')) {
          setError('Identifiants incorrects. Vérifiez votre email et mot de passe.');
        } else if (error.message.includes('Email not confirmed')) {
          setError("Votre email n'a pas été vérifié. Veuillez vérifier votre boîte de réception.");
        } else if (error.message.includes('User not found')) {
          setEmailError("Aucun compte n'existe avec cet email.");
        } else if (error.message.includes('disabled')) {
          setError('Ce compte a été désactivé. Veuillez contacter le support.');
        } else {
          setError("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
        }
      } else {
        // Redirection après connexion réussie
        window.location.href = '/docs/dashboard';
      }
    } catch (err: any) {
      setError("Une erreur inattendue s'est produite. Veuillez réessayer plus tard.");
      console.error('Sign in error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            error={emailError || undefined}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-sm font-medium">
              Mot de passe
            </label>
            <a href="/docs/reset-password-request" className="text-xs text-indigo-600 hover:text-indigo-800">
              Mot de passe oublié ?
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError || undefined}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <>
              <Spinner size="sm" className="mr-2" />
              Connexion en cours...
            </>
          ) : (
            'Se connecter'
          )}
        </Button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <a href="/docs/register" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Créer un compte
          </a>
        </p>
      </div>

      <div className="text-center mt-2">
        <a href="/docs/verify-email-request" className="text-xs text-indigo-600 hover:text-indigo-800">
          Renvoyer l'email de vérification
        </a>
      </div>
    </div>
  );
}

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [displayNameError, setDisplayNameError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Validation en temps réel
  useEffect(() => {
    if (email) {
      if (!validateEmail(email)) {
        setEmailError("Format d'email invalide");
      } else {
        setEmailError(null);
      }
    } else {
      setEmailError(null);
    }
  }, [email]);

  useEffect(() => {
    if (username) {
      if (!validateUsername(username)) {
        setUsernameError("Le nom d'utilisateur doit contenir au moins 3 caractères alphanumériques");
      } else {
        setUsernameError(null);
      }
    } else {
      setUsernameError(null);
    }
  }, [username]);

  useEffect(() => {
    if (displayName && displayName.length < 2) {
      setDisplayNameError("Le nom d'affichage doit contenir au moins 2 caractères");
    } else {
      setDisplayNameError(null);
    }
  }, [displayName]);

  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setConfirmPasswordError("Les mots de passe ne correspondent pas");
      } else {
        setConfirmPasswordError(null);
      }
    } else {
      setConfirmPasswordError(null);
    }
  }, [password, confirmPassword]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation des champs
    let isValid = true;

    if (!email) {
      setEmailError("L'email est requis");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Format d'email invalide");
      isValid = false;
    }

    if (!username) {
      setUsernameError("Le nom d'utilisateur est requis");
      isValid = false;
    } else if (!validateUsername(username)) {
      setUsernameError("Le nom d'utilisateur doit contenir au moins 3 caractères alphanumériques");
      isValid = false;
    }

    if (!displayName) {
      setDisplayNameError("Le nom d'affichage est requis");
      isValid = false;
    } else if (displayName.length < 2) {
      setDisplayNameError("Le nom d'affichage doit contenir au moins 2 caractères");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Le mot de passe est requis");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial");
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("La confirmation du mot de passe est requise");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Les mots de passe ne correspondent pas");
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);
    setError(null);

    try {
      // Créer l'utilisateur dans Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/docs/verify-email`
        }
      });

      if (authError) {
        // Gestion des différents types d'erreurs
        if (authError.message.includes('already registered')) {
          setEmailError("Cet email est déjà utilisé");
        } else {
          throw authError;
        }
        return;
      }

      if (authData?.user) {
        // Créer le profil utilisateur dans la table users
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: authData.user.id,
              username,
              display_name: displayName,
              created_at: new Date().toISOString(),
            },
          ]);

        if (profileError) {
          // Gestion des erreurs de profil
          if (profileError.message.includes('username')) {
            setUsernameError("Ce nom d'utilisateur est déjà utilisé");
          } else {
            throw profileError;
          }
          return;
        }
      }

      // Succès
      setSuccess(true);
      // Redirection vers la page de confirmation
      window.location.href = `/docs/register-confirmation?email=${encodeURIComponent(email)}`;
    } catch (err: any) {
      setError("Une erreur inattendue s'est produite. Veuillez réessayer plus tard.");
      console.error('Sign up error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Alert variant="success" className="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <AlertTitle>Inscription réussie !</AlertTitle>
        <AlertDescription>
          Un email de vérification a été envoyé à {email}. Veuillez vérifier votre boîte de réception et suivre les instructions pour activer votre compte.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            error={emailError || undefined}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Nom d'utilisateur
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="utilisateur123"
            error={usernameError || undefined}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />
        </div>

        <div>
          <label htmlFor="displayName" className="block text-sm font-medium mb-1">
            Nom d'affichage
          </label>
          <Input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Prénom Nom"
            error={displayNameError || undefined}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-circle">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
            }
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Mot de passe
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError || undefined}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          <PasswordStrength password={password} className="mt-2" />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
            Confirmer le mot de passe
          </label>
          <Input
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError || undefined}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            }
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <>
              <Spinner size="sm" className="mr-2" />
              Inscription en cours...
            </>
          ) : (
            "S'inscrire"
          )}
        </Button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a href="/docs/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
