import LocaleSwitcher from './localeSwitcher';
import ThemeToggle from './themeToggle';

export default function Header() {
  return (
    <header className="bg-header-bg text-primary p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">Juan Patiño</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <ThemeToggle/>
          <LocaleSwitcher/>
        </nav>
      </div>
    </header>
  );
}