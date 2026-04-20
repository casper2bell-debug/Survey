
export const metadata = {
  title: "Biomedical Career Quiz",
  description: "Career orientation quiz for biomedical sciences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

