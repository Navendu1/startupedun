export default function NavigationMenu() {
  return (
    <nav className="navigation-menu bg-background text-foreground">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">StartupEdu</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-primary">Home</a></li>
          <li><a href="#" className="hover:text-primary">About</a></li>
          <li><a href="#" className="hover:text-primary">Resources</a></li>
          <li><a href="#" className="hover:text-primary">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
