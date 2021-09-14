export default interface User {
  id: number;
  name: string;
  email: string;
  gender: 'female' | 'male';
  status: 'active' | 'inactive';
}
