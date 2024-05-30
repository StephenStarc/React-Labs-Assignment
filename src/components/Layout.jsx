import NavbarComponent from "./Navbar";

export default function Layout({children}) {
  return (
<>
<NavbarComponent/>
{children}
</>
)
}
