import './Header.css'

export default function Header(props) {
  const navigation = [...props.items]
  
  return (
    <div className='Header'>
      {
        navigation.map((item) => (
          <a className='left' href={item.path}>
              {item.name}
          </a>
        ))
      }

      <a className='right' href='/login'>
        Login
      </a>
    </div>
  );
}