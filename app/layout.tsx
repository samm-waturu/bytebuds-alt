/*
Importing Major CSS files
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import "@/app/css/style.css";
import "@/app/css/responsive.css";
/*
End of CSS major files
 */
export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
