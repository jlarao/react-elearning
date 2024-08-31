import React,{useState, useEffect} from 'react';
import countriesList from "./countries";
import NumericInput from "../comps/NumericInput"
import Cover from "../comps/cover"
import zuz from "../zuz/functions"

function AccountPage(props){ 

    const[view, setView] = useState("numView");
    const[loading, setLoading] = useState(false);
    const[mod, setMode] = useState("sendcode");
    const[dialCode, setDialCode] = useState("+92");
    const[phone, setPhone] = useState(null);
    const[verificationCode, setVerificationCode] = useState(null);
    const[confirmationResutl, setconfirmationResutl] = useState(null);

    useEffect(()=>{        
        if(!window.recaptchaverifier){
            window.recaptchaverifier = new global.firebase.auth.RecaptchaVerifier("__phonesigner__");
            window.recaptchaverifier.render().then(wid =>{
                window.widgetId = wid ;
            });
        }
    })
    const sigin = () =>{        
        if(phone==null){
            zuz.Toast.show({html: "Enter your phone number"});
        }else{
            //setLoading(true);
            zuz.Toast.dismissAll();
            var appverifier = window.recaptchaverifier,
            phoneNumbre = dialCode + phone;
            global.firebase.auth().signInWithPhoneNumber(phoneNumbre, appverifier)
            .then(confirmation =>{
                setconfirmationResutl(confirmation);
                setVerificationCode(null);
                setMode("verifyCode");
                setLoading(false);
                console.log(confirmation);
            })
            .catch(err =>{
                console.log(err);
                setLoading(false);
                switch(err.code){
                    case "auth/invalid-code-error":
                        zuz.Toast.show({thml: "That number is not valid. Please provide a valid phone number..."});
                        break;
                    default:
                        zuz.Toast.show({html: "We are unable to process your request at this time!" + err.message});
                }
            })
        }
        
        console.log("clic");
    }
    const verify = ()=>{
        if(verificationCode=""){
            zuz.Toast.show({html: "Enter verification Code"});
        }else{
            //setLoading(true);
            confirmationResutl.confirm(verificationCode)
            .then(result=>{
                console.log(" you are signed in...");
            })
            .catch(error =>{
                console.log(error);
                setLoading(false);
                zuz.Toast.show("invalid verification code");
            })
        }
    }
    const verifyCodeView = () =>{
        return(
            <div className="oauth-view oauth-view-verify  rel">
                {loading == true && <Cover />}
                <h1 className="s40 otitle fontb">Verify phone number</h1>
                <h1 className="s18 oline fontn">Enter verification code sent to <span className="fontb">{dialCode + phone}</span></h1>    
                 
                <NumericInput  defaultValue={verificationCode} onChange={ e =>{ setVerificationCode(e.target.value ==""? e.target.value : null )} } placeholder="XXXXXXXXXX" className="iput s24 fontb"/>    
                <button onClick={()=>{verify()}} className="button s24 fontb cfff ">Continue</button>
            </div>
            )
    }

    const sendCodeView = () =>{
        return(
        <div className="oauth-view rel">
            {loading == true && <Cover />}
            <h1 className="s40 otitle fontb">Sign In</h1>
            <h1 className="s18 oline fontn">Enter your phone number and we will send one-time verifcation code</h1>

            <select defaultValue={dialCode} 
                onChange={e => {setDialCode(e.target.value == "" ? null : e.target.value)}}
            className="iput s24 fontb">
                {
                    countriesList.map(e =>{
                        return(
                            <option value={e.dial_code}>{e.name}({e.dial_code})</option>
                        )
                    })
                }
            </select>

            <NumericInput  defaultValue={phone} onChange={e =>{setPhone(e.target.value =="" ? null : e.target.value)}} placeholder="55 12345678" className="iput s24 fontb"/>
                <div className="__phonesigner__" id="__phonesigner__"/>
            <button onClick={()=>{sigin()}} className="button s24 fontb cfff ">Continue</button>
        </div>
        )
    }

    return(
        mod == "sendcode" ? sendCodeView() : verifyCodeView()
    )    
}

export default AccountPage