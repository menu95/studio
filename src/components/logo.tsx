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
      {/* Right side - Flower */}
      <g className="fill-accent">
        <path
            d="M50 50C75 25 90 40 90 50C90 60 75 75 50 50Z"
        />
        <path
            d="M50 50C70 20 95 35 95 50C95 65 70 80 50 50Z"
            transform="rotate(30 50 50)"
        />
        <path
            d="M50 50C70 20 95 35 95 50C95 65 70 80 50 50Z"
            transform="rotate(-30 50 50)"
        />
      </g>
      
      {/* Left Side - Brain */}
      <path
        d="M50 95C25.1472 95 5 74.8528 5 50C5 25.1472 25.1472 5 50 5V95Z"
        className="fill-primary"
      />
      <g className="stroke-primary-foreground/90" strokeWidth="4" strokeLinecap="round">
        <path
          d="M25 75C35 80 45 70 40 60C35 50 25 55 20 45"
        />
        <path
          d="M30 40C35 35 45 40 45 30"
        />
      </g>
    </svg>
  );
};

export default Logo;
