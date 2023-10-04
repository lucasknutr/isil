import React from 'react'

const Login = ({ styles, showChat, showSpinner, setUserName, setroomId, handleJoin }:any) => {
  return (
    <div>
      <div
        className={styles.main_div}
        style={{ display: showChat ? "none" : "" }}
      >
        <div className="user-information flex flex-col p-10 bg-[rgba(0,0,0,.5)] rounded-md gap-5">
        <input
          className={styles.main_input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          disabled={showSpinner}
        />
        <input
          className={styles.main_input}
          type="text"
          placeholder="room id"
          onChange={(e) => setroomId(e.target.value)}
          disabled={showSpinner}
        />
        <button className={styles.main_button} onClick={() => handleJoin()}>
          {!showSpinner ? (
            "Join"
          ) : (
            <div className={styles.loading_spinner}></div>
          )}
        </button>

        </div>
      </div>
    </div>
  )
}

export default Login;