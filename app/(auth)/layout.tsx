const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-linear-90 bg-amber-400 via-blue-400 to-red-400">
      {children}
    </div>
  );
};

export default layout;
