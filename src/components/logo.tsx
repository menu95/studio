import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative', className)}>
      <Image
        src="/logo.png"
        alt="Deep Insights Logo"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
