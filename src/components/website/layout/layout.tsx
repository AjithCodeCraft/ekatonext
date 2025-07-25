// src/components/layout/layout.tsx
import { Outlet } from 'react-router-dom';
import { UniversalFooter } from '@/components/website/layout/UniversalFooter';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
     
      
      <main className="flex-1">
        <Outlet /> {/* This is where route components will render */}
      </main>
      
      <UniversalFooter />
    </div>
  );
}