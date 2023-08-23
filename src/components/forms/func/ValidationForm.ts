
export interface ContactTypes{
  nome: string;
  email: string;
  mensagem: string;
}

export function validateContactForm(values:ContactTypes) {
  const errors: ContactTypes = Object()
  

  if (!values.nome) {
    errors.nome = 'Nome é obrigatório';
  }


  if (!values.email) {
    errors.email = 'E-mail é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Endereço de e-mail inválido';
  }

  if (!values.mensagem) {
    errors.mensagem = 'A Mensagem é obrigatória';
  }

  return errors;
}