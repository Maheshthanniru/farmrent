export type User = { username: string; displayName: string; };
const USERS = [
  { username: "farmer_mahesh", password: "Mahesh@123", displayName: "Mahesh" },
  { username: "farmer_ravi",   password: "Ravi@123",   displayName: "Ravi" },
  { username: "farmer_sita",   password: "Sita@123",   displayName: "Sita" }
];
const KEY = "farmrent_user";
export function login(username: string, password: string): User | null {
  const u = USERS.find(x => x.username === username && x.password === password);
  if (!u) return null;
  const user: User = { username: u.username, displayName: u.displayName };
  localStorage.setItem(KEY, JSON.stringify(user));
  return user;
}
export function logout() { localStorage.removeItem(KEY); }
export function getCurrentUser(): User | null {
  try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch { return null; }
}
