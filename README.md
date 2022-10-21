# \_\_Notes

<table>
  <thead align="center">
    <tr border: none;>
      <td><b>Topic</b></td>
      <td><b>Description</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>56.1: authentication vs authorization</td>
      <td>example: normal user ( authentication ), admin user ( authorization ) </td>
    </tr>
     <tr>
      <td>56.2: firebase auth init and set sign in with google</td>
      <td> 
      <ul>
         <li> create new project and get firebase config key </li>
         <li> follow instruction from firebase google setup. <br> ex: create auth using getAuth, create google auth provider, </li>
         <li>Enable Google Sign in Method </li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>56.4: Login popup with google</td>
      <td> 
      <ul>
         <li> Import <code>signInWithPopup</code> from firebase </li>
         <li> <code>signInWithPopup()</code>  is an async function which returns a promise. and it receive 2 params. auth & provider </li>
         <li>create auth with <br> <code> const auth = getAuth(app);</code> <br> here app is imported from firebaseConfig file </li>
         <li>create provider with <br> <code>const provider = new GoogleAuthProvider();
         </code></li>
         <li>  getAuth() & GoogleAuthProvider() is imported from firebase </li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>56.5: Logout google</td>
      <td> 
      <ul>
         <li> signOut is very similer to signInWithPopup </li>
         <li> example: <br>
         <code>
              <code> import { getAuth, signOut } from "firebase/auth"; </code> 
              <code>  const auth = getAuth();</code>
              <code>  signOut(auth).then(() => { </code>
              <code>  // Sign-out successful </code>
              <code>  }).catch((error) => {  </code>
              <code>  // An error happened.  </code>
                });
          </code> 
          </li>

</ul>
</td>
</tr>

  </tbody>
</table>
