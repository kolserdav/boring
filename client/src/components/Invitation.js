import { Link } from "react-router-dom";
import Button from "./Button";

export default function Invitation(props) {

  function hideInvitation() {
    props.setInvitation(false)
  }
  return (
    <div className='blur'>
      <div className='popup'>
        <div className='content__desc' style={{
          marginBottom: '0px'
        }}>
          If you want to save your
          <br />
          choise please log in
        </div>
        <div className='buttons'>
          <Button button_className='btn_primary btn_tutorial'
            button_type=''
            button_title='No, thanks'
            onClick={hideInvitation} />
          <Link onClick={hideInvitation} to="/signup" className='btn_primary btn_tutorial'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}