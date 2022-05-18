import { FormContainer, Input, Textarea } from './styles';

export default function Form() {
  return (
    <FormContainer>
      <Input placeholder="Name" type="text" required />
      <Input placeholder="Email" type="email" required />
      <Textarea placeholder="Message" required />
      <button type="submit">Send</button>
    </FormContainer>
  );
}
