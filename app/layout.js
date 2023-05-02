export default function RootLayout({ children }) {
  return (
    <html style={{width: "100%" , height: "100%"}}>
      <head></head>
      <body style={{display: "flex", alignItems: "flex-start", justifyContent: "center" , background: "pink" , width: "100%" , height: "100% "}}>
        <div >
        <h1 style={{color: "red", textAlign: "center" }}>Daily Todo App</h1>
        {children}
        </div>
      
      </body>
    </html>
  );
}
