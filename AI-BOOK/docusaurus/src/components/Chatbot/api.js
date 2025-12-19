const API_URL = 'http://127.0.0.1:8000';

export const sendQuery = async (query, context = null) => {
  try {
    const response = await fetch(`${API_URL}/agent/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify({ query, selected_text: context }),

    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
