
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  nom: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    nom: string;
  };
}
