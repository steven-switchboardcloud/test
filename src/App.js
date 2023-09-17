import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const handleAuthorize = async () => {
  try {
    // Make an Axios request to your API endpoint
    const headers = {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2NDNkMzA5LWFhMDEtNDIxYi04MGNlLWYwY2FlYTgyNTcxNyIsImVtYWlsIjoicGF1bEBkZXZzdG9ja3RyaW0uY29tIiwib3JnSWQiOiIxNGUzOWMyYS03ODlkLTRmMTMtYWMxNS01ZGQyMzgyNThhNzAiLCJpc1RlbXBQYXNzd29yZCI6ZmFsc2UsImlzRW1haWxWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjk0OTQxMzUyLCJleHAiOjE2OTQ5NDQ5NTJ9.VtqxjEvXC0RVN37Pyp0WqxXjtqF5wgFYzzkqU7botO0',
      'ngrok-skip-browser-warning': true
    }
    const response = await axios.get('https://1782-123-208-44-215.ngrok-free.app/app/v1/oauth', { headers });
    
    // Handle the response as needed
    console.log('Authorization response:', response.data);

    window.location.href = response.data.url;
    
    // Update the state or perform other actions based on the response
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error authorizing:', error);
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <button onClick={handleAuthorize}>
          Authorize
        </button>
      </div>
      </header>
    </div>
  );
}

export default App;
