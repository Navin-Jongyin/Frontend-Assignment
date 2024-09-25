import './AppSearch.css';

interface AppSearchProps {
  value: string;
  onValueChange: (value: string) => void;
}

const AppSearch: React.FC<AppSearchProps> = (props) => {
  const { value, onValueChange } = props;

  return (
    <div className='user-search'>
      <input 
        className='user-search-input'
        type="text"
        placeholder='Search User'
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  );
}

export default AppSearch;