import React from 'react';
import "./css/signup.css"
import "./css/font.css"
import "./css/base.css"

function Signup() {
    return (
        <body>
            <div>
                <div class="title">sign up</div>
                <div class="flex">
                    <div class="input-div">
                        <label class="input-label">아이디</label>
                        <input type="text"/>
                    </div>
                    <div class="input-div">
                        <label class="input-label">비밀번호</label>
                        <input type="password"/>
                    </div>
                    <div class="input-div">
                        <label class="input-label">비밀번호 확인</label>
                        <input type="password"/>
                    </div>
                    <div class="input-div">
                        <label class="input-label">이메일</label>
                        <input type="text"/>
                    </div>
                    
                </div>
                <button>
                    next
                </button>
            </div>
        </body>
    )
}

export default Signup