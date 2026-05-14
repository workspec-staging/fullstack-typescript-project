declare const __BUILD_TIME__: string;

const app = document.getElementById('app')!;

app.innerHTML = `
  <h1>Hello WorkSpec</h1>
  <p>Port: ${window.location.port}</p>
  <p>Built: ${__BUILD_TIME__}</p>
`;
