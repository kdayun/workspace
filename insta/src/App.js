import './App.css';
import InputInfo from './Input';
import instagram from './instagram.jpeg';

function App() {
  return (
    <div className="box">
      <div>
        <div>
          <div className='title'>
            <img src={instagram}></img>
          </div>
          
          <div className="input-box">
            <InputInfo name="전화번호, 사용자 이름 또는 이메일"/>
            <InputInfo name="비밀번호"/>
          </div>
          <button className='login'>로그인</button>
          <div>
            <div className='or-line'></div>
            <span className='or'>또는</span>
            <div className='or-line'></div>
          </div>
          
        </div>
        
        
        
      </div>
      <div className="sign-up">
        <div>계정이 있으신가요?</div>
      </div>
      
    </div>
    
  );
}

export default App;
