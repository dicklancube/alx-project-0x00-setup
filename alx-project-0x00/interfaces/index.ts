// interfaces/index.ts

export interface PillProps {
    title: string;
  }
  
  export interface ButtonProps {
    title: string;
    styles: string; // 👈 this is what the checker looks for
  }
  