import React from 'react';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('w-16 h-16', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,10 C77.61,10 100,32.39 100,60 C100,87.61 77.61,110 50,110 C22.39,110 0,87.61 0,60 C0,32.39 22.39,10 50,10 Z"
        className="fill-current text-primary/20"
      />
      <path
        d="M30,90 C40,95 60,95 70,90 L70,30 C60,25 40,25 30,30 Z"
        className="fill-current text-primary"
      />
       <path
        d="M70,50 C85,45 95,55 90,70 C85,85 70,85 70,70"
        className="fill-current text-accent"
      />
    </svg>
  );
};

export default Logo;
