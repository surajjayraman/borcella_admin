interface MultiTextProps {
  placeholder: string;
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}
const MultiText: React.FC<MultiTextProps> = ({placeholder, value, onChange, onRemove}) => {
  return <div>MultiText</div>;
};

export default MultiText;
