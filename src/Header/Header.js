import './Header.css'

export default function Header(items) {
  const navigation = [...items.items]
  
  return (
    <div className='Header'>
      {
        navigation.map((item) => (
          <a href={item.path}>
              {item.name}
          </a>
        ))
      }
    </div>
  );
}