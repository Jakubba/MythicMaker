export const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Ten e-mail jest już używany.';
    case 'auth/invalid-email':
      return 'Niepoprawny adres e-mail.';
    case 'auth/weak-password':
      return 'Hasło jest zbyt słabe.';
    default:
      return 'Wystąpił nieznany błąd. Spróbuj ponownie później.';
  }
};
