
interface TheoryHeaderProps {
  title: string;
  subtitle: string;
}

export const TheoryHeader = ({ title, subtitle }: TheoryHeaderProps) => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        {title}
      </h1>
      <p className="text-xl text-gray-600">{subtitle}</p>
    </div>
  );
};
