interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="max-w-[1024px] w-full mx-auto">{children}</div>
}
