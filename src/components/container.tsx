interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="max-w-[1280px] w-full mx-auto">{children}</div>;
}
