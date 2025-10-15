export async function api<T>(endpoint: string): Promise<T> {
    const response = await fetch(`http://localhost:3000/api${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data as T;
}